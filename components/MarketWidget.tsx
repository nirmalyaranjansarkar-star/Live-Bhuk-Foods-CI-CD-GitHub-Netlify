import React from 'react';
import { Language } from '../types';
import { MARKET_DATA, TRANSLATIONS } from '../constants';

interface MarketWidgetProps {
  lang: Language;
}

const MarketWidget: React.FC<MarketWidgetProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-orange-200 dark:border-slate-800 p-6 my-8 transition-all hover:shadow-md duration-500">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <span className="text-[#D32F2F] animate-bounce" style={{ animationDuration: '2s' }}>📊</span> {t.market_title}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">{t.market_subtitle}</p>
        </div>
        <div className="text-xs text-slate-400 dark:text-slate-500">
           Updated: {new Date().toLocaleDateString(lang === 'bn' ? 'bn-IN' : 'en-IN')}
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {MARKET_DATA.map((item, idx) => (
          <div 
            key={item.id} 
            className="bg-[#FFF8E1] dark:bg-slate-800 p-3 rounded-lg border border-orange-100 dark:border-slate-700 flex flex-col items-center text-center hover:border-orange-300 dark:hover:border-slate-500 hover:bg-white dark:hover:bg-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default group"
            style={{ transitionDelay: `${idx * 50}ms` }}
          >
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 group-hover:text-[#D32F2F] transition-colors">
              {lang === 'bn' ? item.nameBn : item.name}
            </div>
            <div className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:scale-110 transition-transform duration-300">
              ₹{item.price}
            </div>
            <div className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1 mt-1">
               / {lang === 'bn' ? item.unitBn : item.unit}
               {item.trend === 'up' && <span className="text-[#D32F2F] animate-pulse">▲</span>}
               {item.trend === 'down' && <span className="text-[#388E3C] animate-pulse">▼</span>}
               {item.trend === 'stable' && <span className="text-slate-400">−</span>}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center text-[10px] text-slate-400 dark:text-slate-500 mt-4">
        Market data is indicative. Source: <a href="https://wbagrimarketingboard.gov.in/" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-500 dark:hover:text-slate-300">WB Agri Marketing Board</a>
      </div>
    </div>
  );
};

export default MarketWidget;