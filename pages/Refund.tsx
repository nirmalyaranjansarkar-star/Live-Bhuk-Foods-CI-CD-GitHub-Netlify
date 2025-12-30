import React from 'react';

const Refund: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-16 transition-colors duration-500">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Return & Refund Policy</h1>
          <p className="text-slate-600 dark:text-slate-400">Last Updated: October 2024</p>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 md:p-12 space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed transition-colors duration-500">
           
           <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-orange-100 dark:border-slate-700 pb-2">1. No Return on Food</h2>
            <p>
              Due to the perishable nature of cooked food items, <strong>we do not accept returns</strong> of meal boxes once they have been delivered.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-orange-100 dark:border-slate-700 pb-2">2. Refunds for Quality Issues</h2>
            <p className="mb-4">We take immense pride in our quality. However, if you face any of the following issues, we will provide a full refund for that specific meal or adjust it in the next bill:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Food is spilled or packaging is damaged during delivery.</li>
              <li>Missing items (e.g., you ordered a Non-Veg meal but received Veg).</li>
              <li>Foreign object found in food or food is stale.</li>
            </ul>
            <p className="mt-4 text-sm bg-orange-50 dark:bg-slate-800 p-4 rounded-lg border border-orange-100 dark:border-slate-700">
              <strong>Note:</strong> You must report the issue within 2 hours of delivery with a photograph via WhatsApp to +91 75959 23777.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-orange-100 dark:border-slate-700 pb-2">3. Subscription Cancellations</h2>
            <p className="mb-4">If you wish to cancel your monthly subscription midway:</p>
             <ul className="list-disc pl-6 space-y-2">
              <li>If cancelled within the first 3 days: Full refund of remaining days.</li>
              <li>If cancelled after 3 days: We will refund the amount for the remaining days after deducting a <strong>10% administrative processing fee</strong>.</li>
              <li>Refunds are processed to the original payment method within 5-7 business days.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Refund;