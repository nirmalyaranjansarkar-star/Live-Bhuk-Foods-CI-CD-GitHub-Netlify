import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';

// --- CONFIGURATION ---
const KITCHEN_COORDS = { lat: 22.6816, lng: 88.3799 }; // Bhuk Foods Kitchen (Agarpara)
const RATE_PER_KM = 5;
const FREE_ROUND_TRIP_KM = 1.0; 

const DeliveryCostCalculator: React.FC = () => {
  // State
  const [mapDistance, setMapDistance] = useState<number>(0);
  const [cost, setCost] = useState<number>(0);
  // Fixed: removed unused isAnimating variable
  const [, setIsAnimating] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('Tap map to set delivery location');

  // Map Refs
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const userMarkerRef = useRef<L.Marker | null>(null);
  const bikeMarkerRef = useRef<L.Marker | null>(null);
  const routeLineRef = useRef<L.Polyline | null>(null);

  // --- LOGIC: Haversine Formula ---
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Earth radius in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; 
  };

  const deg2rad = (deg: number) => deg * (Math.PI / 180);

  // --- LOGIC: Pricing ---
  useEffect(() => {
    // 1. Calculate Round Trip
    const roundTripDistance = mapDistance * 2;
    const roundedDist = Math.round(roundTripDistance * 10) / 10; // Round to 1 decimal

    // 2. Pricing Rule
    // If Round Trip <= 1km, Free.
    // Else, (RoundTrip - 1km) * 5
    let calculatedCost = 0;
    
    if (mapDistance <= 0) {
      calculatedCost = 0;
      setMessage('Tap map to see delivery rates');
    } else if (roundedDist <= FREE_ROUND_TRIP_KM) {
      calculatedCost = 0;
      setMessage(`Round Trip: ${roundedDist} km. Delivery is FREE! 🎉`);
    } else {
      const chargeableKm = roundedDist - FREE_ROUND_TRIP_KM;
      // Using Math.ceil to be safe for business, or Math.round as per preference. 
      // The prompt example "Chargeable: 3.2km -> Cost: 16" implies exact float mult (3.2*5=16).
      // We will use Math.ceil to ensure no fractional rupees.
      calculatedCost = Math.ceil(chargeableKm * RATE_PER_KM);
      setMessage(`Round Trip: ${roundedDist} km. First 1km free.`);
    }

    setCost(calculatedCost);
  }, [mapDistance]);

  // --- INITIALIZE MAP ---
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    // 1. Create Map
    const map = L.map(mapContainerRef.current, {
      center: [KITCHEN_COORDS.lat, KITCHEN_COORDS.lng],
      zoom: 14,
      scrollWheelZoom: false,
      attributionControl: false
    });

    // 2. Add Tiles (OSM)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    // 3. Custom Icons
    const kitchenIcon = L.divIcon({
      className: 'custom-map-icon',
      html: `<div style="background:#D32F2F; color:white; width:36px; height:36px; border-radius:50%; display:flex; align-items:center; justify-content:center; border:2px solid white; box-shadow:0 3px 6px rgba(0,0,0,0.3); font-size:18px;">🏠</div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 18]
    });

    const userIcon = L.divIcon({
      className: 'custom-map-icon',
      html: `<div style="background:#212121; color:white; width:36px; height:36px; border-radius:50%; display:flex; align-items:center; justify-content:center; border:2px solid white; box-shadow:0 3px 6px rgba(0,0,0,0.3); font-size:18px;">📍</div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 36]
    });

    const bikeIcon = L.divIcon({
      className: 'bike-icon',
      html: `<div style="font-size:30px; filter: drop-shadow(0 2px 2px rgba(0,0,0,0.2));">🛵</div>`,
      iconSize: [40, 40],
      iconAnchor: [20, 20]
    });

    // 4. Add Kitchen Marker
    L.marker([KITCHEN_COORDS.lat, KITCHEN_COORDS.lng], { icon: kitchenIcon })
      .addTo(map)
      .bindPopup("<b>Bhuk Foods Kitchen</b><br>Agarpara HQ")
      .openPopup();

    // 5. Initialize Bike Marker (Hidden initially or at Kitchen)
    bikeMarkerRef.current = L.marker([KITCHEN_COORDS.lat, KITCHEN_COORDS.lng], { 
      icon: bikeIcon, 
      zIndexOffset: 1000 
    }).addTo(map);

    // 6. Map Click Event
    map.on('click', (e: L.LeafletMouseEvent) => {
      const { lat, lng } = e.latlng;
      
      // Update Distance State
      const dist = calculateDistance(KITCHEN_COORDS.lat, KITCHEN_COORDS.lng, lat, lng);
      setMapDistance(dist);

      // Move/Create User Marker
      if (userMarkerRef.current) {
        userMarkerRef.current.setLatLng([lat, lng]);
      } else {
        userMarkerRef.current = L.marker([lat, lng], { icon: userIcon }).addTo(map);
      }

      // Draw Path Line
      const pathCoords: [number, number][] = [
        [KITCHEN_COORDS.lat, KITCHEN_COORDS.lng],
        [lat, lng]
      ];

      if (routeLineRef.current) {
        routeLineRef.current.setLatLngs(pathCoords);
      } else {
        routeLineRef.current = L.polyline(pathCoords, { 
          color: '#D32F2F', 
          weight: 4, 
          opacity: 0.7, 
          dashArray: '10, 10' 
        }).addTo(map);
      }

      // Animate Bike
      animateBike([KITCHEN_COORDS.lat, KITCHEN_COORDS.lng], [lat, lng]);
    });

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // --- ANIMATION LOGIC ---
  const animateBike = (start: [number, number], end: [number, number]) => {
    if (!bikeMarkerRef.current) return;
    
    setIsAnimating(true);
    const duration = 1000; // 1 second
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Interpolate Lat/Lng
      const currentLat = start[0] + (end[0] - start[0]) * progress;
      const currentLng = start[1] + (end[1] - start[1]) * progress;

      bikeMarkerRef.current?.setLatLng([currentLat, currentLng]);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-12 bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-orange-100 dark:border-slate-800">
      <div className="p-6 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="text-[#D32F2F]">🛵</span> Delivery Cost Calculator
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Tap on the map to see bike delivery rates from our Kitchen.
          </p>
        </div>
        
        {/* Live Result Card */}
        <div className="bg-white dark:bg-slate-900 px-6 py-3 rounded-2xl border border-orange-200 dark:border-slate-600 shadow-sm flex items-center gap-6">
           <div className="text-right">
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Distance (1-Way)</div>
              <div className="font-mono font-bold text-lg dark:text-white">{mapDistance.toFixed(2)} km</div>
           </div>
           <div className="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>
           <div className="text-right">
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Delivery Fee</div>
              <div className={`font-black text-2xl ${cost === 0 ? 'text-green-600' : 'text-[#D32F2F]'}`}>
                {cost === 0 ? 'FREE' : `₹${cost}`}
              </div>
           </div>
        </div>
      </div>

      <div className="relative h-[450px] w-full bg-slate-100 z-0">
        <div ref={mapContainerRef} className="w-full h-full z-0" />
        
        {/* Overlay Message */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-4 py-2 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 z-[400] text-xs font-bold text-slate-600 dark:text-slate-300">
          {message}
        </div>
      </div>
    </div>
  );
};

export default DeliveryCostCalculator;