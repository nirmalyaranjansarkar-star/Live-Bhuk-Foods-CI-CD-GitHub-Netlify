import React, { useRef } from 'react';
import { Language } from '../types';
import { TESTIMONIALS, TRANSLATIONS } from '../constants';

interface TestimonialsProps {
  lang: Language;
}

const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350; // Approx card width
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  const getColor = (index: number) => {
    const colors = ['bg-red-100 text-red-700', 'bg-blue-100 text-blue-700', 'bg-green-100 text-green-700', 'bg-orange-100 text-orange-700', 'bg-purple-100 text-purple-700'];
    return colors[index % colors.length];
  };

  return (
    <div className="py-20 bg-[#FFF8E1] dark:bg-slate-950 border-b border-orange-100 dark:border-slate-800 overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 font-bengali-support">
            {t.testimonials_title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300">Join 500+ happy families in Agarpara, Sodepur & Belgharia</p>
        </div>

        {/* Carousel Container */}
        <div className="relative group animate-on-scroll delay-100">
          
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-[#D32F2F] hover:scale-110 hover:shadow-xl transition-all duration-300 hidden md:block active:scale-95"
            aria-label="Previous testimonials"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>

          {/* Scroll Area */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar px-4 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TESTIMONIALS.map((review, idx) => (
              <div 
                key={review.id} 
                className="min-w-[300px] md:min-w-[350px] bg-white dark:bg-slate-900 p-6 rounded-2xl border border-orange-50 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col snap-center relative"
              >
                {/* Profile Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${getColor(idx)} transform transition-transform hover:scale-110 duration-300`}>
                    {getInitials(review.name)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">{review.name}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{review.role}</div>
                  </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6 italic flex-1 text-sm leading-relaxed z-10 relative">
                  "{lang === 'bn' ? review.contentBn : review.content}"
                </p>
                
                <div className="mt-auto pt-4 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                   <div className="flex text-yellow-400 text-xs gap-0.5">
                      {[...Array(review.rating)].map((_, i) => <span key={i}>★</span>)}
                   </div>
                   <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 flex items-center gap-1 hover:text-[#D32F2F] transition-colors">
                      {review.source}
                      {review.source === 'Google' && <span className="text-[#D32F2F]">G</span>}
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-[#D32F2F] hover:scale-110 hover:shadow-xl transition-all duration-300 hidden md:block active:scale-95"
            aria-label="Next testimonials"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;