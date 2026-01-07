
import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { trackEvent, GTM_EVENTS } from '../services/analytics';

interface CalculatorProps {
  lang: Language;
}

const Calculator: React.FC<CalculatorProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  
  const [householdSize, setHouseholdSize] = useState(2);
  // Removed eatingOutWeekly state as it is now fixed per person
  const [cookingHours, setCookingHours] = useState(14); // Kept for time-saving display
  const [maidSalary, setMaidSalary] = useState(2500);
  const [showBreakdown, setShowBreakdown] = useState(false);
  
  const [savings, setSavings] = useState(0);
  const [bhukCost, setBhukCost] = useState(0);
  const [currentCost, setCurrentCost] = useState(0);

  // --- COST ANALYSIS FRAMEWORK CONSTANTS ---
  const BHUK_PER_PERSON = 2100; 
  const LPG_COST = 850; 
  
  // Grocery Specifics (Per Person)
  const RICE_DAILY_KG = 0.1; // 100g for lunch
  const RICE_PRICE = 55; // per kg
  
  const ATTA_PER_ROTI_KG = 0.025; // 25g
  const ROTI_COUNT = 4; // dinner
  const ATTA_PRICE = 40; // per kg
  
  const PROTEIN_DAILY_KG = 0.075; // 75g
  const PROTEIN_PRICE = 250; // avg blended price (chicken/fish/paneer)
  
  const VEG_DAILY_KG = 0.25; // 250g
  const VEG_PRICE = 100; // seasonal avg
  
  const OTHERS_MONTHLY = 700; // Oil, Dal, Masala, Breakfast items, Packaging

  // Eating Out Specifics
  const EATING_OUT_PER_PERSON_MONTHLY = 200; // Fixed assumption: Rs. 200/head
  
  // Hidden & Intangible Costs (Fixed Assumptions)
  const TIME_COST_DAILY = 50; // Standard assumed value
  const TIME_COST_MONTHLY = TIME_COST_DAILY * 30; // ₹1,500
  const MENTAL_LOAD_COST = 500; // Decision fatigue, planning, stress
  const STORAGE_ELECTRICITY_COST = 200; // Extra fridge load

  // Calculated Values for Display
  const [breakdown, setBreakdown] = useState({
    rice: 0,
    atta: 0,
    protein: 0,
    veg: 0,
    others: 0,
    totalGrocery: 0
  });

  useEffect(() => {
    // 1. Detailed Grocery Calculation (Monthly)
    const days = 30;
    const riceCost = (RICE_DAILY_KG * RICE_PRICE * days) * householdSize;
    const attaCost = (ATTA_PER_ROTI_KG * ROTI_COUNT * ATTA_PRICE * days) * householdSize;
    const proteinCost = (PROTEIN_DAILY_KG * PROTEIN_PRICE * days) * householdSize;
    const vegCost = (VEG_DAILY_KG * VEG_PRICE * days) * householdSize;
    const othersCost = OTHERS_MONTHLY * householdSize;
    
    const totalGroc = riceCost + attaCost + proteinCost + vegCost + othersCost;

    setBreakdown({
      rice: riceCost,
      atta: attaCost,
      protein: proteinCost,
      veg: vegCost,
      others: othersCost,
      totalGrocery: totalGroc
    });

    // 2. Eating Out (Fixed per head now)
    const monthlyEatingOut = EATING_OUT_PER_PERSON_MONTHLY * householdSize;

    // 3. Maid Costs (Salary + Amortized Bonus)
    const maidBonusMonthly = maidSalary > 0 ? Math.round(maidSalary / 12) : 0;
    const totalMaidCost = maidSalary + maidBonusMonthly;
    
    // 4. Total Current Cost
    // Formula: Groceries + Eating Out + LPG + Maid(Salary+Bonus) + Time Value + Mental Load + Electricity
    const totalCurrent = totalGroc + monthlyEatingOut + LPG_COST + totalMaidCost + TIME_COST_MONTHLY + MENTAL_LOAD_COST + STORAGE_ELECTRICITY_COST;
    
    // Bhuk Cost
    const totalBhuk = BHUK_PER_PERSON * householdSize;
    
    setCurrentCost(totalCurrent);
    setBhukCost(totalBhuk);
    setSavings(totalCurrent - totalBhuk);
  }, [householdSize, maidSalary]);

  const handleInteract = () => {
    trackEvent(GTM_EVENTS.CALCULATOR_USE, { savings });
  };

  return (
    <div id="calculator" className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-xl overflow-hidden relative border border-slate-800 transition-all duration-500 hover:shadow-2xl">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#fe0467] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse" style={{ animationDuration: '4s' }}></div>
      
      <div className="grid md:grid-cols-2 gap-10 relative z-10">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#fe0467]">{t.calc_title}</h2>
          <p className="text-slate-300 text-sm">{t.calc_desc}</p>
          
          <div className="space-y-5">
            {/* Inputs */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase tracking-wide text-slate-400">{t.label_household}</label>
                <span className="font-bold">{householdSize} People</span>
              </div>
              <input 
                type="range" min="1" max="6" step="1" 
                value={householdSize} 
                onChange={(e) => setHouseholdSize(Number(e.target.value))}
                onMouseUp={handleInteract}
                className="w-full accent-[#D32F2F] h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer hover:bg-slate-600 transition-colors"
              />
            </div>
            
            {/* Removed Eating Out Slider as it's now fixed logic */}

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase tracking-wide text-slate-400">Maid Salary</label>
                <span className="font-bold">₹{maidSalary}</span>
              </div>
              <input 
                type="range" min="0" max="8000" step="100" 
                value={maidSalary} 
                onChange={(e) => setMaidSalary(Number(e.target.value))}
                onMouseUp={handleInteract}
                className="w-full accent-[#D32F2F] h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer hover:bg-slate-600 transition-colors"
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase tracking-wide text-slate-400">{t.label_cooking_time}</label>
                <span className="font-bold">{cookingHours} hrs/week</span>
              </div>
              <input 
                type="range" min="0" max="40" step="1" 
                value={cookingHours} 
                onChange={(e) => setCookingHours(Number(e.target.value))}
                onMouseUp={handleInteract}
                className="w-full accent-[#D32F2F] h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer hover:bg-slate-600 transition-colors"
              />
              <div className="text-[10px] text-slate-500 mt-1">*Used to calculate time savings, not financial cost.</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-slate-600 hover:-translate-y-1">
            <div className="text-sm text-slate-400 mb-2">{t.result_savings}</div>
            <div className={`text-4xl md:text-5xl font-bold mb-2 transition-all duration-500 ${savings > 0 ? 'text-[#388E3C] scale-100' : 'text-red-400 scale-100'}`}>
              {savings > 0 ? '+' : ''}₹{savings.toLocaleString()}
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-700 grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="block text-slate-500">Current Spend</span>
                <span className="text-white font-mono text-lg">₹{currentCost.toLocaleString()}</span>
              </div>
              <div>
                <span className="block text-slate-500">Bhuk (Office Plan)</span>
                <span className="text-[#D32F2F] font-mono text-lg">₹{bhukCost.toLocaleString()}</span>
              </div>
            </div>
            
            <button 
              onClick={() => setShowBreakdown(!showBreakdown)}
              className="mt-6 w-full py-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white border border-slate-600 rounded hover:bg-slate-700 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              {showBreakdown ? 'Hide Detailed Analysis' : 'See Detailed Cost Analysis'} 
              <span className={`transform transition-transform duration-300 ${showBreakdown ? 'rotate-180' : 'group-hover:translate-y-1'}`}>▼</span>
            </button>
          </div>
        </div>
      </div>

      {/* Itemised Cost Table */}
      <div className={`mt-0 overflow-hidden transition-all duration-500 ease-in-out ${showBreakdown ? 'max-h-[1600px] opacity-100 mt-8' : 'max-h-0 opacity-0'}`}>
         <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-4 text-sm hover:bg-slate-800/80 transition-colors duration-300">
            <h3 className="text-[#fe0467] font-bold mb-4 uppercase text-xs tracking-widest border-b border-slate-700 pb-2">Home-Cooked Food Expense Analysis</h3>
            
            <div className="grid grid-cols-12 gap-2 mb-2 font-bold text-slate-400 text-xs uppercase px-2">
               <div className="col-span-6">Cost Category</div>
               <div className="col-span-3 text-right">Estimated Cost</div>
               <div className="col-span-3 text-right text-[#D32F2F]">Bhuk</div>
            </div>
            
            <div className="space-y-1">
               {/* 1. Groceries Parent Row */}
               <div className="grid grid-cols-12 gap-2 p-2 border-b border-slate-700/30 bg-slate-700/10">
                  <div className="col-span-6">
                    <div className="text-slate-200 font-bold">Groceries (Raw Materials)</div>
                    <div className="text-[10px] text-slate-500 leading-tight mt-1">Total market cost for {householdSize} people</div>
                  </div>
                  <div className="col-span-3 text-right font-mono font-bold self-center">₹{breakdown.totalGrocery.toLocaleString()}</div>
                  <div className="col-span-3 text-right font-mono text-slate-500 self-center">-</div>
               </div>

               {/* 1.a Rice */}
               <div className="grid grid-cols-12 gap-2 py-1 px-4 border-b border-slate-800/50 text-xs hover:bg-slate-700/10">
                  <div className="col-span-6 text-slate-400">
                    <span className="text-slate-300">Rice</span> (100g/meal @ ₹55/kg)
                  </div>
                  <div className="col-span-3 text-right font-mono text-slate-400">₹{breakdown.rice.toLocaleString()}</div>
                  <div className="col-span-3"></div>
               </div>

               {/* 1.b Atta */}
               <div className="grid grid-cols-12 gap-2 py-1 px-4 border-b border-slate-800/50 text-xs hover:bg-slate-700/10">
                  <div className="col-span-6 text-slate-400">
                     <span className="text-slate-300">Atta</span> (4 rotis/day @ ₹40/kg)
                  </div>
                  <div className="col-span-3 text-right font-mono text-slate-400">₹{breakdown.atta.toLocaleString()}</div>
                  <div className="col-span-3"></div>
               </div>

               {/* 1.c Veggies */}
               <div className="grid grid-cols-12 gap-2 py-1 px-4 border-b border-slate-800/50 text-xs hover:bg-slate-700/10">
                  <div className="col-span-6 text-slate-400">
                     <span className="text-slate-300">Vegetables</span> (250g/day @ ₹100/kg)
                  </div>
                  <div className="col-span-3 text-right font-mono text-slate-400">₹{breakdown.veg.toLocaleString()}</div>
                  <div className="col-span-3"></div>
               </div>

               {/* 1.d Protein */}
               <div className="grid grid-cols-12 gap-2 py-1 px-4 border-b border-slate-800/50 text-xs hover:bg-slate-700/10">
                  <div className="col-span-6 text-slate-400">
                     <span className="text-slate-300">Protein</span> (75g/day @ ₹250/kg)
                  </div>
                  <div className="col-span-3 text-right font-mono text-slate-400">₹{breakdown.protein.toLocaleString()}</div>
                  <div className="col-span-3"></div>
               </div>

               {/* 1.e Others */}
               <div className="grid grid-cols-12 gap-2 py-1 px-4 border-b border-slate-700/30 text-xs hover:bg-slate-700/10 mb-2">
                  <div className="col-span-6 text-slate-400">
                     <span className="text-slate-300">Essentials</span> (Oil, Dal, Masala, Breakfast)
                  </div>
                  <div className="col-span-3 text-right font-mono text-slate-400">₹{breakdown.others.toLocaleString()}</div>
                  <div className="col-span-3"></div>
               </div>


               {/* 2. Eating Out */}
               <div className="grid grid-cols-12 gap-2 p-2 border-b border-slate-700/30 hover:bg-slate-700/20 transition-colors">
                  <div className="col-span-6 text-slate-300 self-center">
                    Eating Out / Snacks <span className="text-xs text-slate-500">(₹50/week)</span>
                  </div>
                  <div className="col-span-3 text-right font-mono self-center">₹{(EATING_OUT_PER_PERSON_MONTHLY * householdSize).toLocaleString()}</div>
                  <div className="col-span-3 text-right font-mono text-slate-500 self-center">-</div>
               </div>

               {/* 3. LPG */}
               <div className="grid grid-cols-12 gap-2 p-2 border-b border-slate-700/30 hover:bg-slate-700/20 transition-colors">
                  <div className="col-span-6 text-slate-300 self-center">LPG Cylinder (Fuel)</div>
                  <div className="col-span-3 text-right font-mono self-center">₹{LPG_COST}</div>
                  <div className="col-span-3 text-right font-mono text-slate-500 self-center">-</div>
               </div>
               
               {/* 4. Maid Costs */}
               {maidSalary > 0 && (
                 <>
                  <div className="grid grid-cols-12 gap-2 p-2 border-b border-slate-700/30 hover:bg-slate-700/20 transition-colors">
                      <div className="col-span-6 text-slate-300 self-center">Maid Salary</div>
                      <div className="col-span-3 text-right font-mono self-center">₹{maidSalary.toLocaleString()}</div>
                      <div className="col-span-3 text-right font-mono text-slate-500 self-center">-</div>
                  </div>
                  <div className="grid grid-cols-12 gap-2 p-2 border-b border-slate-700/30 hover:bg-slate-700/20 transition-colors bg-red-900/10">
                      <div className="col-span-6">
                        <div className="text-slate-300">Maid Annual Bonus (Amortized)</div>
                        <div className="text-[10px] text-slate-500">1 month salary ÷ 12 months</div>
                      </div>
                      <div className="col-span-3 text-right font-mono self-center">₹{Math.round(maidSalary / 12).toLocaleString()}</div>
                      <div className="col-span-3 text-right font-mono text-slate-500 self-center">-</div>
                  </div>
                 </>
               )}

               {/* 5. Electricity */}
               <div className="grid grid-cols-12 gap-2 p-2 border-b border-slate-700/30 hover:bg-slate-700/20 transition-colors bg-yellow-900/5">
                  <div className="col-span-6">
                    <div className="text-slate-300">Food Storage Electricity</div>
                    <div className="text-[10px] text-slate-500">Extra fridge usage cost</div>
                  </div>
                  <div className="col-span-3 text-right font-mono self-center">₹{STORAGE_ELECTRICITY_COST}</div>
                  <div className="col-span-3 text-right font-mono text-slate-500 self-center">-</div>
               </div>

               {/* 6. Intangible: Mental Load */}
               <div className="grid grid-cols-12 gap-2 p-2 border-b border-slate-700/30 hover:bg-slate-700/20 transition-colors bg-purple-900/10">
                  <div className="col-span-6">
                    <div className="text-slate-300">Mental Load (Intangible)</div>
                    <div className="text-[10px] text-slate-500">Planning stress, coordination & cognitive tax</div>
                  </div>
                  <div className="col-span-3 text-right font-bold self-center text-red-500 text-xs uppercase tracking-wide">Significant</div>
                  <div className="col-span-3 text-right font-mono text-slate-500 self-center">-</div>
               </div>

               {/* 7. Time Cost */}
               <div className="grid grid-cols-12 gap-2 p-2 bg-yellow-900/10 rounded hover:bg-yellow-900/20 transition-colors">
                  <div className="col-span-6">
                     <div className="text-yellow-500/80 font-semibold">Time Value (Labor)</div>
                     <div className="text-[10px] text-yellow-500/60">Standard assumption: ₹50/day</div>
                  </div>
                  <div className="col-span-3 text-right font-mono text-yellow-500 self-center">₹{TIME_COST_MONTHLY.toLocaleString()}</div>
                  <div className="col-span-3 text-right font-mono text-slate-500 self-center">-</div>
               </div>

               {/* Totals */}
               <div className="grid grid-cols-12 gap-2 pt-4 font-bold text-lg border-t border-slate-600 mt-2">
                  <div className="col-span-6 text-white">True Monthly Cost</div>
                  <div className="col-span-3 text-right font-mono">₹{currentCost.toLocaleString()}</div>
                  <div className="col-span-3 text-right font-mono text-[#D32F2F]">₹{bhukCost.toLocaleString()}</div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Calculator;
