
import React, { useState } from 'react';
import { Language } from '../types';
import { PLANS, TRANSLATIONS, SUBSCRIPTION_FORM_URL } from '../constants';
import { trackEvent, GTM_EVENTS } from '../services/analytics';

interface PlansProps {
  lang: Language;
}

const Plans: React.FC<PlansProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [filter, setFilter] = useState<'all' | 'student' | 'professional' | 'senior'>('all');

  const handleSubscribe = (planId: string) => {
    trackEvent(GTM_EVENTS.SUBSCRIBE_CLICK, { plan_id: planId });
    window.open(SUBSCRIPTION_FORM_URL, '_blank');
  };

  // Filter logic
  const subscriptionPlans = PLANS.filter(plan => {
    if (plan.type !== 'subscription') return false;
    if (filter !== 'all' && plan.id !== filter) return false;
    return true;
  });

  const oneTimePlans = PLANS.filter(plan => plan.type === 'onetime');

  return (
    <div className="py-8">
      <div className="text-center mb-12 animate-on-scroll">
        {/* Filters for Subscriptions */}
        <div className="inline-flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-inner">
            {['all', 'student', 'professional', 'senior'].map((f) => (
              <button
                key={f}
                onClick={() => {
                  setFilter(f as any);
                  trackEvent(GTM_EVENTS.PLAN_VIEW, { filter: f });
                }}
                className={`px-5 py-2.5 text-sm font-bold rounded-lg capitalize transition-all duration-300 ${
                  filter === f 
                    ? 'bg-white dark:bg-slate-700 text-[#D32F2F] shadow-md transform scale-105' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                }`}
              >
                {f}
              </button>
            ))}
        </div>
      </div>

      {/* Subscription Plans Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
        {subscriptionPlans.map((plan, idx) => (
          <div 
            key={plan.id} 
            className="relative bg-white dark:bg-slate-900 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:border-orange-200 dark:hover:border-slate-600 transition-all duration-300 flex flex-col group overflow-hidden"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            {/* Top Image Section */}
            <div className="h-56 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 z-10"></div>
               <img 
                 src={plan.image} 
                 alt={lang === 'bn' ? plan.nameBn : plan.name} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
               
               {plan.id === 'professional' && (
                 <div className="absolute top-4 left-4 bg-gradient-to-r from-[#fe0467] to-[#D32F2F] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg z-20 flex items-center gap-1">
                   <span className="text-yellow-300">★</span> {lang === 'bn' ? 'বেস্ট সেলার' : 'BEST SELLER'}
                 </div>
               )}

               <div className="absolute bottom-4 left-6 z-20">
                 <h3 className="text-2xl font-black text-white leading-tight font-bengali-support drop-shadow-md">
                   {lang === 'bn' ? plan.nameBn : plan.name}
                 </h3>
                 <p className="text-slate-200 text-xs font-bold uppercase tracking-wide mt-1 opacity-90">
                   {lang === 'bn' ? plan.bestForBn : plan.bestFor}
                 </p>
               </div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-end gap-1 mb-8 pb-8 border-b border-slate-100 dark:border-slate-800">
                <div className="flex flex-col mb-1.5 mr-2">
                   {plan.type === 'subscription' && (
                     <span className="text-[10px] text-slate-400 font-bold uppercase leading-tight text-right">Starts<br/>from</span>
                   )}
                </div>
                <span className="text-5xl font-black text-[#D32F2F] tracking-tight">₹{plan.price}</span>
                <div className="flex flex-col mb-1.5">
                   <span className="text-xs text-slate-400 font-bold uppercase">per</span>
                   <span className="text-sm font-bold text-slate-600 dark:text-slate-300">month</span>
                </div>
                <div className="ml-auto bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-lg">
                   <span className="text-xs font-bold text-green-700 dark:text-green-400">₹{plan.perMeal}/meal</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {(lang === 'bn' ? plan.featuresBn : plan.features).map((feat, idx) => (
                  <li key={idx} className="flex items-start text-slate-600 dark:text-slate-300 text-sm font-medium">
                    <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span className="leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleSubscribe(plan.id)}
                className="w-full font-bold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-red-100 dark:shadow-red-900/20 hover:shadow-xl transform hover:scale-[1.02] active:scale-95 bg-[#D32F2F] hover:bg-[#b71c1c] text-white text-lg flex items-center justify-center gap-2"
              >
                {t.hero_cta}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* One-Time / Trial Section */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="text-center mb-10 relative z-10">
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase mb-3 inline-block">
              {lang === 'bn' ? 'কোনো প্রতিশ্রুতি নেই' : 'No Commitment Required'}
            </span>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 font-bengali-support">
               {lang === 'bn' ? 'গেস্ট মিল এবং ট্রায়াল' : 'Guest Meals & Trials'}
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
               {lang === 'bn' ? 'সাবস্ক্রিপশন নেওয়ার আগে স্বাদ পরীক্ষা করতে চান?' : 'Want to taste before you subscribe? Order a single meal.'}
            </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 justify-center relative z-10">
            {oneTimePlans.map((plan) => (
            <div 
                key={plan.id} 
                className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row gap-6 items-center"
            >
                <div className="w-full md:w-48 h-48 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                    <img 
                        src={plan.image} 
                        alt={plan.name} 
                        className="w-full h-full object-cover" 
                    />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white font-bengali-support">{lang === 'bn' ? plan.nameBn : plan.name}</h3>
                        <div className="text-3xl font-black text-[#D32F2F] mt-2 md:mt-0">₹{plan.price}</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                         {(lang === 'bn' ? plan.featuresBn : plan.features).slice(0, 4).map((feat, i) => (
                             <div key={i} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                                 <svg className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                 {feat}
                             </div>
                         ))}
                    </div>

                    <button 
                        onClick={() => handleSubscribe(plan.id)}
                        className="w-full md:w-auto bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-3 px-8 rounded-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-lg"
                    >
                        {lang === 'bn' ? 'অর্ডার করুন' : 'Order Single Meal'}
                    </button>
                </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
