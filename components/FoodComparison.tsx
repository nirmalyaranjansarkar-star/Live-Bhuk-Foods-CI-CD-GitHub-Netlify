import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, COMPARISON_DATA } from '../constants';

interface FoodComparisonProps {
  lang: Language;
}

const FoodComparison: React.FC<FoodComparisonProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="py-16 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 animate-on-scroll">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 font-bengali-support">
            {t.comp_title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
             {t.comp_subtitle}
          </p>
        </div>

        <div className="overflow-x-auto shadow-xl rounded-2xl border border-orange-100 dark:border-slate-800 animate-on-scroll delay-100">
          <table className="w-full min-w-[800px] border-collapse bg-white dark:bg-slate-900 text-sm md:text-base">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                <th className="p-4 text-left font-bold text-slate-500 dark:text-slate-400 w-1/6 sticky left-0 bg-slate-50 dark:bg-slate-800 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                  {lang === 'bn' ? 'প্যারামিটার' : 'Parameters'}
                </th>
                <th className="p-4 text-center font-bold text-green-700 dark:text-green-400 bg-[#FFF8E1] dark:bg-slate-950 border-x border-orange-200 dark:border-slate-800 w-1/5 scale-105 shadow-md relative z-0">
                  <div className="flex flex-col items-center">
                    {t.col_bhuk}
                    <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full mt-1 border border-green-200">RECOMMENDED</span>
                  </div>
                </th>
                <th className="p-4 text-center font-semibold text-slate-600 dark:text-slate-300 w-1/6">{t.col_self}</th>
                <th className="p-4 text-center font-semibold text-slate-600 dark:text-slate-300 w-1/6">{t.col_maid}</th>
                <th className="p-4 text-center font-semibold text-slate-600 dark:text-slate-300 w-1/6">{t.col_apps}</th>
                <th className="p-4 text-center font-semibold text-slate-600 dark:text-slate-300 w-1/6">{t.col_street}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {COMPARISON_DATA.map((row, idx) => (
                <tr key={idx} className={`hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${idx % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-[#FAFAFA] dark:bg-slate-900/50'}`}>
                  <td className="p-4 font-bold text-slate-700 dark:text-slate-200 sticky left-0 bg-inherit z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] border-r border-slate-100 dark:border-slate-800">
                    {lang === 'bn' ? row.parameterBn : row.parameter}
                  </td>
                  <td className="p-4 text-center font-bold text-green-700 dark:text-green-400 bg-[#FFF8E1] dark:bg-slate-950 border-x border-orange-200 dark:border-slate-800">
                    {lang === 'bn' ? row.bhukBn : row.bhuk}
                  </td>
                  <td className="p-4 text-center text-slate-600 dark:text-slate-400">{lang === 'bn' ? row.selfBn : row.self}</td>
                  <td className="p-4 text-center text-slate-600 dark:text-slate-400">{lang === 'bn' ? row.maidBn : row.maid}</td>
                  <td className="p-4 text-center text-slate-600 dark:text-slate-400">{lang === 'bn' ? row.appsBn : row.apps}</td>
                  <td className="p-4 text-center text-slate-600 dark:text-slate-400">{lang === 'bn' ? row.streetBn : row.street}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FoodComparison;