import React, { useState } from 'react';
import { Language } from '../types';
import { FAQS, TRANSLATIONS } from '../constants';

interface FAQProps {
  lang: Language;
}

const FAQ: React.FC<FAQProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-slate-900 dark:text-white animate-on-scroll">{t.faq_title}</h2>
      <div className="space-y-4">
        {FAQS.map((faq, idx) => (
          <div 
            key={faq.id} 
            className="border border-orange-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 animate-on-scroll"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full text-left px-6 py-4 font-semibold text-slate-800 dark:text-slate-100 flex justify-between items-center focus:outline-none hover:bg-[#FFF8E1] dark:hover:bg-slate-700/50 hover:pl-8 transition-all duration-300 group"
              aria-expanded={openId === faq.id}
            >
              <span className="pr-4 group-hover:text-[#D32F2F] transition-colors">{lang === 'bn' ? faq.questionBn : faq.question}</span>
              <span className={`transform transition-transform duration-300 text-[#D32F2F] ${openId === faq.id ? 'rotate-180' : 'group-hover:rotate-90'}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                openId === faq.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-6 text-slate-600 dark:text-slate-300 border-t border-orange-100 dark:border-slate-700 pt-4 text-sm leading-relaxed bg-[#FFF8E1]/30 dark:bg-slate-700/30">
                {lang === 'bn' ? faq.answerBn : faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;