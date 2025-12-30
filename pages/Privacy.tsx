import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-16 transition-colors duration-500">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Privacy Policy</h1>
           <p className="text-slate-600 dark:text-slate-400">Last Updated: October 2024</p>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 md:p-12 space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed transition-colors duration-500">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-orange-100 dark:border-slate-700 pb-2">1. Information We Collect</h2>
            <p className="mb-4">
              To provide our kitchen substitution service efficiently, we collect the following personal information when you sign up:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Details:</strong> Name, Phone Number, and Delivery Address.</li>
              <li><strong>Dietary Preferences:</strong> Food allergies, preference (Veg/Non-Veg), and spice tolerance levels.</li>
              <li><strong>Payment Info:</strong> Transaction IDs (we do not store your UPI PINs or Credit Card numbers).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-orange-100 dark:border-slate-700 pb-2">2. How We Use Your Data</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To deliver meals to the correct address.</li>
              <li>To customize your meal plan based on your preferences.</li>
              <li>To communicate regarding delivery updates, menu changes, or subscription renewals via WhatsApp or Call.</li>
            </ul>
          </section>

          <section>
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-orange-100 dark:border-slate-700 pb-2">3. Data Sharing</h2>
             <p>
               <strong>We do not sell your data.</strong> Your information is strictly used for Bhuk Foods operations. We may share your address and phone number with our verified delivery partners solely for the purpose of delivering your food.
             </p>
          </section>

          <section>
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-orange-100 dark:border-slate-700 pb-2">4. Contact Us</h2>
             <p>
               If you have questions regarding your data or wish to delete your account, please contact us at:
             </p>
             <div className="mt-4 font-bold text-slate-900 dark:text-white">
               Bhuk Foods HQ<br/>
               Nilganj Road, Agarpara<br/>
               Kolkata - 700109<br/>
               Email: contact@bhukfoods.com<br/>
               Phone: +91 75959 23777
             </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;