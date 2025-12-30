
import React from 'react';
import { JOB_APPLICATION_FORM_URL } from '../constants';
import { Language } from '../types';

interface JobOpportunityProps {
  lang: Language;
}

const JobOpportunity: React.FC<JobOpportunityProps> = ({ lang }) => {
  const isBn = lang === 'bn';

  return (
    <div className="min-h-screen bg-[#FFF8E1] dark:bg-slate-950 pt-24 pb-24 transition-colors duration-500">
      <div className="container mx-auto px-4">
        
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl mb-16 h-64 md:h-96 group">
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070" 
            alt="Bhuk Foods Kitchen Team" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white max-w-3xl">
            <span className="bg-[#D32F2F] text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block tracking-wider shadow-md">
              {isBn ? 'আমরা নিয়োগ করছি' : 'We Are Hiring'}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 font-bengali-support">
              {isBn ? 'ভুক ফুডস পরিবারের অংশ হোন' : 'Join the Bhuk Foods Family'}
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed text-slate-200">
              {isBn 
                ? 'আগরপাড়া ও সোদপুর এলাকার সেরা কিচেনে কাজ করার সুযোগ। আমরা আপনার প্রতিভা ও পরিশ্রমের মর্যাদা দিই।' 
                : "We aren't just a kitchen; we are a community. We are looking for passionate cooks, helpers, and delivery partners in Agarpara & Sodepur."}
            </p>
          </div>
        </div>

        {/* Company Culture - Redesigned with Image */}
        <div className="max-w-6xl mx-auto mb-20 animate-on-scroll">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-orange-100 dark:border-slate-800 flex flex-col md:flex-row items-center gap-10">
             <div className="flex-1 order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 font-bengali-support leading-tight">
                  {isBn ? 'আমাদের সংস্কৃতি: মর্যাদা, সম্মান ও উন্নতি' : 'Our Culture: Dignity, Respect & Growth'}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-4">
                  {isBn 
                    ? 'ভুক ফুডস-এ আমরা বিশ্বাস করি যে খুশি মনে রান্না করলে খাবারের স্বাদ বাড়ে। আমরা একটি পরিষ্কার, পেশাদার এবং সম্মানজনক কাজের পরিবেশ নিশ্চিত করি।' 
                    : 'At Bhuk Foods, we believe that happy hands cook tasty food. We provide a clean, professional, and respectful working environment where every team member is valued.'}
                </p>
                <div className="flex gap-3 flex-wrap">
                   <span className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                     {isBn ? 'পরিচ্ছন্ন কিচেন' : 'Clean Kitchen'}
                   </span>
                   <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                     {isBn ? 'পেশাদার পরিবেশ' : 'Professional Env'}
                   </span>
                </div>
             </div>
             <div className="flex-1 w-full order-1 md:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#D32F2F] rounded-2xl transform rotate-3 opacity-20"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070" 
                    alt="Happy Kitchen Team Cooking" 
                    className="relative rounded-2xl shadow-lg w-full h-64 md:h-80 object-cover transform -rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white dark:border-slate-800"
                  />
                </div>
             </div>
          </div>
        </div>

        {/* Roles Grid */}
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center font-bengali-support">
          {isBn ? 'খালি পদসমূহ' : 'Open Positions'}
        </h3>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Role 1: Cooks */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-orange-100 dark:border-slate-800 hover:-translate-y-2 transition-all duration-300 animate-on-scroll flex flex-col group">
            <div className="w-14 h-14 bg-orange-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:bg-orange-200 dark:group-hover:bg-slate-700 transition-colors">
              👨‍🍳
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-bengali-support">
              {isBn ? 'হেড ও অ্যাসিস্ট্যান্ট কুক' : 'Head & Asst. Cooks'}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium uppercase tracking-wide">Agarpara Kitchen HQ</p>
            
            <div className="space-y-4 flex-1">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">{isBn ? 'প্রয়োজনীয়তা' : 'Requirements'}</h4>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                  <li className="flex gap-2"><span className="text-green-500">✓</span> {isBn ? 'বাঙালি রান্নায় দক্ষতা' : 'Expertise in Bengali Cuisine'}</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span> {isBn ? '৫০+ মানুষের রান্নার অভিজ্ঞতা' : 'Experience in bulk cooking'}</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span> {isBn ? 'পরিচ্ছন্ন স্বভাব' : 'Hygienic cooking habits'}</li>
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                 <p className="text-sm text-slate-500"><span className="font-bold">{isBn ? 'শিফট' : 'Shift'}:</span> Morning (5 AM - 2 PM)</p>
              </div>
            </div>
          </div>

          {/* Role 2: Helpers */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-orange-100 dark:border-slate-800 hover:-translate-y-2 transition-all duration-300 animate-on-scroll delay-100 flex flex-col group">
            <div className="w-14 h-14 bg-blue-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:bg-blue-200 dark:group-hover:bg-slate-700 transition-colors">
              🥔
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-bengali-support">
              {isBn ? 'কিচেন হেল্পার' : 'Kitchen Helpers'}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium uppercase tracking-wide">Agarpara Kitchen HQ</p>
            
            <div className="space-y-4 flex-1">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">{isBn ? 'দায়িত্বসমূহ' : 'Responsibilities'}</h4>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                  <li className="flex gap-2"><span className="text-blue-500">✓</span> {isBn ? 'সবজি কাটা ও ধোয়া' : 'Vegetable cutting & cleaning'}</li>
                  <li className="flex gap-2"><span className="text-blue-500">✓</span> {isBn ? 'মিল বক্স প্যাক করা' : 'Packing meal boxes neatly'}</li>
                  <li className="flex gap-2"><span className="text-blue-500">✓</span> {isBn ? 'কিচেন রক্ষণাবেক্ষণ' : 'Kitchen maintenance'}</li>
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                 <p className="text-sm text-slate-500"><span className="font-bold">{isBn ? 'গুণ' : 'Qualities'}:</span> Hardworking attitude</p>
              </div>
            </div>
          </div>

          {/* Role 3: Delivery */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-orange-100 dark:border-slate-800 hover:-translate-y-2 transition-all duration-300 animate-on-scroll delay-200 flex flex-col group">
            <div className="w-14 h-14 bg-green-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:bg-green-200 dark:group-hover:bg-slate-700 transition-colors">
              🛵
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-bengali-support">
              {isBn ? 'ডেলিভারি পার্টনার' : 'Delivery Partners'}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium uppercase tracking-wide">Sodepur - Belgharia Route</p>
            
            <div className="space-y-4 flex-1">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">{isBn ? 'প্রয়োজনীয়তা' : 'Requirements'}</h4>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                  <li className="flex gap-2"><span className="text-green-500">✓</span> {isBn ? 'নিজস্ব সাইকেল বা বাইক' : 'Own Cycle or Bike'}</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span> {isBn ? 'এলাকার রাস্তাঘাট চেনা' : 'Local area knowledge'}</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span> {isBn ? 'স্মার্টফোন ও জিপিএস' : 'Smartphone with GPS'}</li>
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                 <p className="text-sm text-slate-500"><span className="font-bold">{isBn ? 'সুবিধা' : 'Benefit'}:</span> Fuel allowance provided</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section & CTA */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 mb-16 animate-on-scroll shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-bengali-support">
                {isBn ? 'কেন আমাদের সাথে কাজ করবেন?' : 'Why Work With Us?'}
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-slate-800 p-3 rounded-lg h-fit text-[#D32F2F] shadow-inner">💰</div>
                  <div>
                    <h4 className="font-bold text-lg">{isBn ? 'সঠিক সময়ে বেতন' : 'On-Time Salary'}</h4>
                    <p className="text-slate-400 text-sm">{isBn ? 'মাসের ১ তারিখে বেতন নিশ্চিত।' : 'We pay on the 1st of every month. No delays.'}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-slate-800 p-3 rounded-lg h-fit text-[#D32F2F] shadow-inner">🍲</div>
                  <div>
                    <h4 className="font-bold text-lg">{isBn ? 'ফ্রি খাবার' : 'Free Duty Meals'}</h4>
                    <p className="text-slate-400 text-sm">{isBn ? 'ডিউটি চলাকালীন স্বাস্থ্যকর খাবার ফ্রি।' : 'Staff gets healthy, fresh food during their shift.'}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-slate-800 p-3 rounded-lg h-fit text-[#D32F2F] shadow-inner">📈</div>
                  <div>
                    <h4 className="font-bold text-lg">{isBn ? 'উন্নতির সুযোগ' : 'Growth Opportunity'}</h4>
                    <p className="text-slate-400 text-sm">{isBn ? 'ভালো কাজ করলে ম্যানেজার পদে প্রমোশন।' : 'Hardworking staff are promoted to Managers.'}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 text-center shadow-lg transform transition-transform hover:scale-[1.01]">
              <h3 className="text-xl font-bold mb-2 font-bengali-support">{isBn ? 'আবেদন করতে চান?' : 'Ready to Apply?'}</h3>
              <p className="text-slate-300 mb-8 text-sm leading-relaxed">
                {isBn 
                  ? 'নিচের ফর্মটি পূরণ করুন। ২৪ ঘণ্টার মধ্যে আমরা আপনাকে ইন্টারভিউয়ের জন্য ডাকব।' 
                  : 'Fill out the simple application form below. We will call you for an interview within 24 hours.'}
              </p>
              <a 
                href={JOB_APPLICATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-bold py-4 rounded-xl transition-all transform hover:scale-105 shadow-xl hover:shadow-red-900/50"
              >
                {isBn ? 'আবেদন ফর্ম খুলুন ↗' : 'Open Application Form ↗'}
              </a>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs text-slate-400 mb-1">{isBn ? 'কিছু প্রশ্ন আছে?' : 'Have questions?'}</p>
                <p className="text-sm font-mono tracking-tight">WhatsApp: <span className="text-white font-bold">+91 75959 23777</span></p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default JobOpportunity;
