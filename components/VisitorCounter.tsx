import React, { useEffect, useState } from 'react';

const VisitorCounter: React.FC = () => {
  const [count, setCount] = useState<number>(8768);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Configuration
    const BASE_COUNT = 8768;
    const DAILY_GROWTH = 5;
    // Anchor date: Oct 25, 2024 (Project Launch approx)
    // This ensures the counter has a stable time-based growth component
    const LAUNCH_DATE = new Date('2024-10-25T00:00:00').getTime();
    const STORAGE_KEY = 'bhuk_visitor_hits';

    try {
      // 1. Calculate Time-Based Growth (+5 every day)
      const now = Date.now();
      const msPerDay = 1000 * 60 * 60 * 24;
      const daysPassed = Math.max(0, (now - LAUNCH_DATE) / msPerDay);
      const timeBasedGrowth = Math.floor(daysPassed * DAILY_GROWTH);

      // 2. Calculate Per-Visitor Growth (Local Session)
      // We increment this local counter every time the component mounts (page visit)
      const storedHits = localStorage.getItem(STORAGE_KEY);
      let localHits = storedHits ? parseInt(storedHits, 10) : 0;
      
      // Increment hit for this visit
      localHits += 1;
      localStorage.setItem(STORAGE_KEY, localHits.toString());

      // 3. Total Count
      const totalCount = BASE_COUNT + timeBasedGrowth + localHits;
      
      setCount(totalCount);
    } catch (e) {
      console.error("Visitor counter error", e);
      setCount(BASE_COUNT);
    }
  }, []);

  if (!mounted) return null;

  return (
    <div className="inline-flex items-center gap-2 bg-slate-800 dark:bg-slate-900 border border-slate-700 rounded-full px-3 py-1 text-xs font-mono text-slate-400 shadow-inner">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      <span className="font-semibold tracking-wide">
        Visitors: <span className="text-slate-200">{count.toLocaleString()}</span>
      </span>
    </div>
  );
};

export default VisitorCounter;