import React from 'react';
import { NO_MEAL_FORM_URL } from '../constants';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-16 transition-colors duration-500">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Terms & Conditions</h1>
          <p className="text-slate-600 dark:text-slate-400">Last Updated: October 2024</p>
        </div>

        <div className="bg-[#FFF8E1] dark:bg-slate-900 border-l-4 border-[#D32F2F] p-6 rounded-r-xl shadow-md mb-12 flex items-start gap-4 animate-on-scroll is-visible">
          <div className="text-[#D32F2F] text-3xl shrink-0">⚠️</div>
          <div>
            <h3 className="text-xl font-bold text-[#D32F2F] mb-1">Important Notice for Subscribers</h3>
            <p className="text-slate-800 dark:text-slate-200 font-medium text-lg leading-relaxed">
              By subscribing to Bhuk Foods, you agree to our prepaid policy and our 24-hour notice rule for pausing meals.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 md:p-12 space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed transition-colors duration-500">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-orange-100 dark:border-slate-700 pb-2">1. Service Overview</h2>
            <p className="mb-4">
              Bhuk Foods ("we", "us", or "our") operates a kitchen substitution service providing cooked meals to registered subscribers in Agarpara, Sodepur, Belgharia, and surrounding areas in Kolkata. By accessing our website or subscribing to our plans, you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-orange-100 dark:border-slate-700 pb-2">2. Subscriptions & Payments</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Prepaid Nature:</strong> All subscription plans (Student, Professional, Senior) are 100% prepaid. Service commences only after payment confirmation.</li>
              <li><strong>Payment Methods:</strong> We accept UPI, Bank Transfer, and Cash on First Delivery.</li>
              <li><strong>Renewal:</strong> Subscriptions do not auto-renew. You will be reminded 3 days before your current plan expires.</li>
            </ul>
          </section>

          <section>
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-orange-100 dark:border-slate-700 pb-2">3. Meal Pausing & Carrying Forward</h2>
             <p className="mb-2">We understand you may travel or eat out. To pause your meal:</p>
             <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You must inform us via WhatsApp or Phone <strong>24 hours in advance</strong>.</li>
              <li>Same-day cancellations are not eligible for credit/refund as the ingredients would have already been procured.</li>
              <li>Credits for paused days will be adjusted in your next month's renewal bill.</li>
            </ul>
            <a 
              href={NO_MEAL_FORM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md"
            >
              Fill No Meal Day Claim Form ↗
            </a>
          </section>

          <section>
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-orange-100 dark:border-slate-700 pb-2">4. Delivery Policy</h2>
             <ul className="list-disc pl-6 space-y-2">
               <li>Lunch is delivered between 11:30 AM - 1:30 PM.</li>
               <li>Dinner is delivered between 7:30 PM - 9:30 PM.</li>
               <li>We use thermal bags to keep food warm. Please return any reusable containers/tiffin carriers if applicable.</li>
               <li>In case of heavy rains or waterlogging (common in Kolkata), delivery times might be affected. We appreciate your patience.</li>
             </ul>
          </section>

          <section>
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-orange-100 dark:border-slate-700 pb-2">5. Limitation of Liability</h2>
             <p>
               While we maintain strict hygiene standards (FSSAI norms), Bhuk Foods is not liable for allergic reactions if the user has not disclosed specific allergies during sign-up. Please consume the food within 2 hours of delivery for safety.
             </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;