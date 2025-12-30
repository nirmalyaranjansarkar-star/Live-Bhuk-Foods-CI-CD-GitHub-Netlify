import React from 'react';
import { Language } from '../types';
import { FREE_RESOURCES_FORM_URL } from '../constants';
import { trackEvent } from '../services/analytics';

interface LeadGenProps {
  lang: Language;
}

const LeadGen: React.FC<LeadGenProps> = ({ lang }) => {
  const isBn = lang === 'bn';

  const handleClick = () => {
    trackEvent('lead_gen_click', { location: 'home_section' });
    window.open(FREE_RESOURCES_FORM_URL, '_blank');
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl my-16 relative border border-slate-700 group">
      <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="space-y-6 order-2 md:order-1 p-8 md:p-12">
          <div className="inline-block bg-[#D32F2F] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 shadow-lg shadow-red-900/50">
            {isBn ? 'সীমিত সময়ের অফার' : 'Limited Time Offer'}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {isBn 
              ? 'আপনার রান্নাঘরের খরচ ৫০% কমানোর গোপন সূত্র' 
              : 'The "Zero-Headache" Kitchen Guide'}
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            {isBn 
              ? 'বাজারের সেরা টিপস, হেলদি রেসিপি এবং কিচেন হ্যাকস - সব এখন এক পিডিএফ-এ।' 
              : 'Join 1,000+ smart families in Agarpara. Get our exclusive guide on how to save ₹4,000/month on food without compromising quality.'}
          </p>
          
          <button 
            onClick={handleClick}
            className="bg-[#D32F2F] hover:bg-[#b71c1c] text-white text-lg font-bold px-8 py-4 rounded-xl shadow-lg shadow-red-900/40 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 group/btn w-full md:w-auto justify-center"
          >
            {isBn ? 'ফ্রি গাইড ডাউনলোড করুন' : 'Get My Free Guide'}
          </button>
        </div>
        <div className="order-1 md:order-2 h-64 md:h-full">
            <img 
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="A vibrant and healthy salad bowl, representing Bhuk Foods' commitment to fresh and nutritious meal planning guides."
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
        </div>
      </div>
    </div>
  );
};

export default LeadGen;