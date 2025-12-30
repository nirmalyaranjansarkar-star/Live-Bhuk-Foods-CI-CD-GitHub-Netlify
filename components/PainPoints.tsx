import React from 'react';
import { Language } from '../types';
import { PAIN_POINTS, TRANSLATIONS } from '../constants';

interface PainPointsProps {
  lang: Language;
}

const PainPoints: React.FC<PainPointsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="py-20 bg-white dark:bg-slate-950 border-b border-orange-100 dark:border-slate-800 relative overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-bengali-support leading-tight">
            {t.pain_title}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t.pain_subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PAIN_POINTS.map((item, idx) => (
            <div 
              key={item.id} 
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-orange-200 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden group animate-on-scroll"
              style={{ transitionDelay: `${(idx % 4) * 100}ms` }}
            >
              <div className="text-5xl mb-6 bg-slate-50 dark:bg-slate-800 w-20 h-20 flex items-center justify-center rounded-2xl self-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-orange-50 dark:group-hover:bg-slate-700">
                {item.emoji}
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 text-center min-h-[3.5rem] flex items-center justify-center font-bengali-support leading-tight">
                {lang === 'bn' ? item.titleBn : item.title}
              </h3>

              <div className="space-y-4 flex-1">
                <div className="bg-red-50/50 dark:bg-red-900/10 p-4 rounded-xl border border-red-100/50 dark:border-red-900/30 group-hover:bg-red-50 dark:group-hover:bg-red-900/20 transition-colors">
                  <span className="flex items-center gap-2 text-[10px] font-bold text-red-600 dark:text-red-400 uppercase tracking-wider mb-2">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    {t.pain_problem}
                  </span>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                    "{lang === 'bn' ? item.problemBn : item.problem}"
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-xl border border-green-100 dark:border-green-900/30 mt-auto shadow-sm group-hover:shadow-md transition-shadow">
                  <span className="flex items-center gap-2 text-[10px] font-bold text-green-700 dark:text-green-400 uppercase tracking-wider mb-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    {t.pain_solution}
                  </span>
                  <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-semibold">
                    {lang === 'bn' ? item.solutionBn : item.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PainPoints;