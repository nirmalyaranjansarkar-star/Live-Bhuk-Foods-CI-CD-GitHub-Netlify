
import React from 'react';
import { Language } from '../types';

interface PriceComparisonTableProps {
  lang: Language;
}

const PriceComparisonTable: React.FC<PriceComparisonTableProps> = ({ lang }) => {
  const isBn = lang === 'bn';

  const headers = [
    { 
      title: 'BLPGA (Bhuk)', 
      titleBn: 'BLPGA (ভুক)', 
      subtitle: 'Residents Exclusive',
      subtitleBn: 'আবাসিক স্পেশাল',
      highlight: true, 
      color: 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800' 
    },
    { 
      title: 'Student / Senior', 
      titleBn: 'স্টুডেন্ট / সিনিয়র', 
      subtitle: 'Bhuk Saver Plans',
      subtitleBn: 'সেভার প্ল্যান',
      highlight: true, 
      color: 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800' 
    },
    { 
      title: 'Office / Couple', 
      titleBn: 'অফিস / কাপল', 
      subtitle: 'Bhuk Standard',
      subtitleBn: 'স্ট্যান্ডার্ড প্ল্যান',
      highlight: true, 
      color: 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800' 
    },
    { 
      title: 'Other Delivery', 
      titleBn: 'অন্যান্য ডেলিভারি', 
      subtitle: 'Standard Tiffins',
      subtitleBn: 'সাধারণ টিফিন',
      highlight: false, 
      color: 'bg-gray-100 text-gray-600 border-gray-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700' 
    },
    { 
      title: 'Home Cooking', 
      titleBn: 'বাড়িতে রান্না', 
      subtitle: 'Grocery + Gas + Cook',
      subtitleBn: 'বাজার + গ্যাস + রাঁধুনি',
      highlight: false, 
      color: 'bg-gray-100 text-gray-600 border-gray-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700' 
    },
  ];

  const vegRow = {
    label: 'Basic Veg Meal',
    labelBn: 'বেসিক মিল (নিরামিষ)',
    sub: 'Breakfast + Lunch + Dinner',
    subBn: 'ব্রেকফাস্ট + লাঞ্চ + ডিনার',
    values: ['₹1,950', '₹2,850', '₹3,300', '₹4,500+', '₹7,000+']
  };

  const nonVegRow = {
    label: 'Full Meal',
    labelBn: 'ফুল মিল (নন-ভেজ)',
    sub: 'With Non-Veg Dinner',
    subBn: 'সাথে নন-ভেজ ডিনার',
    values: ['₹2,700', '₹3,600', '₹4,050', '₹6,000+', '₹9,000+']
  };

  return (
    <div className="w-full max-w-7xl mx-auto my-16 animate-on-scroll px-2 md:px-0">
      <div className="text-center mb-10">
        <span className="bg-[#D32F2F] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3 inline-block shadow-lg shadow-red-500/30 animate-pulse">
          {isBn ? 'মার্কেট চ্যালেঞ্জ' : 'Market Disruption Challenge'}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white font-bengali-support mb-3">
          {isBn ? 'আমরা কতটা সাশ্রয়ী?' : 'How Affordable Are We?'}
        </h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          {isBn 
            ? 'মাসিক খরচের তুলনা (ব্রেকফাস্ট + লাঞ্চ + ডিনার)। দেখুন আপনি প্রতি মাসে কত টাকা বাঁচাতে পারেন।' 
            : 'Total Monthly Cost Comparison for 3 Meals/Day. See exactly how much you save vs cooking at home.'}
        </p>
      </div>

      <div className="overflow-x-auto rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
        <table className="w-full text-center border-collapse min-w-[900px]">
          <thead>
            <tr>
              <th className="p-6 text-left bg-slate-50 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 font-bold border-b dark:border-slate-700 w-[180px]">
                {isBn ? 'সাবস্ক্রিপশন টাইপ' : 'Subscriber Type'}
              </th>
              {headers.map((h, i) => (
                <th key={i} className={`p-4 border-b dark:border-slate-700 w-[18%]`}>
                  <div className={`py-3 px-2 rounded-xl border ${h.color} h-full flex flex-col justify-center`}>
                     <div className="font-black text-sm md:text-base leading-tight font-bengali-support mb-1">{isBn ? h.titleBn : h.title}</div>
                     <div className="text-[10px] opacity-80 font-medium uppercase tracking-wide">{isBn ? h.subtitleBn : h.subtitle}</div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
             {/* Veg Row */}
             <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
               <td className="p-6 text-left border-r border-slate-50 dark:border-slate-800">
                 <div className="font-bold text-slate-800 dark:text-slate-200 text-lg font-bengali-support">{isBn ? vegRow.labelBn : vegRow.label}</div>
                 <div className="text-xs text-slate-400 mt-1">{isBn ? vegRow.subBn : vegRow.sub}</div>
               </td>
               {vegRow.values.map((val, i) => (
                 <td key={i} className="p-6 relative group">
                   <div className={`font-black text-xl md:text-2xl ${i < 3 ? 'text-green-600 dark:text-green-400' : 'text-slate-400 dark:text-slate-500'}`}>
                     {val}
                   </div>
                   {i === 0 && (
                     <span className="absolute top-2 right-2 md:top-4 md:right-8 bg-green-500 text-white text-[9px] px-2 py-0.5 rounded-full font-bold shadow-sm">
                       LOWEST
                     </span>
                   )}
                   {i === 4 && (
                     <span className="block text-[10px] text-red-400 font-bold mt-1 bg-red-50 dark:bg-red-900/20 rounded px-1 w-fit mx-auto">
                       Expensive!
                     </span>
                   )}
                 </td>
               ))}
             </tr>
             {/* Non Veg Row */}
             <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors bg-slate-50/50 dark:bg-slate-800/10">
               <td className="p-6 text-left border-r border-slate-50 dark:border-slate-800">
                 <div className="font-bold text-slate-800 dark:text-slate-200 text-lg font-bengali-support">{isBn ? nonVegRow.labelBn : nonVegRow.label}</div>
                 <div className="text-xs text-slate-400 mt-1">{isBn ? nonVegRow.subBn : nonVegRow.sub}</div>
               </td>
               {nonVegRow.values.map((val, i) => (
                 <td key={i} className="p-6">
                   <div className={`font-black text-xl md:text-2xl ${i < 3 ? 'text-[#D32F2F]' : 'text-slate-400 dark:text-slate-500'}`}>
                     {val}
                   </div>
                   {i < 3 && (
                     <div className="h-1 w-8 bg-green-200 dark:bg-green-900 rounded-full mx-auto mt-2">
                       <div className="h-full bg-green-500 rounded-full" style={{ width: '100%' }}></div>
                     </div>
                   )}
                 </td>
               ))}
             </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 bg-slate-900 text-white p-6 rounded-2xl text-center shadow-xl transform md:rotate-1 md:hover:rotate-0 transition-transform duration-300 md:mx-20 border-2 border-slate-700 relative overflow-hidden group">
         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
         <p className="text-xl md:text-2xl font-bold font-bengali-support">
           💡 {isBn ? 'বটম লাইন: বাড়িতে রান্নার চেয়ে ভুক ফুডস-এ খাওয়া ~৫০% সস্তা!' : 'Bottom Line: Eating at Bhuk Foods is ~50% CHEAPER than cooking at home.'}
         </p>
         <p className="text-slate-400 text-sm mt-2">
            {isBn ? 'এছাড়াও, আপনি মাসে ৪০+ ঘন্টা সময় এবং প্রচুর পরিশ্রম বাঁচান।' : 'Plus, you save 40+ hours of time and effort every month.'}
         </p>
      </div>
    </div>
  );
};

export default PriceComparisonTable;
