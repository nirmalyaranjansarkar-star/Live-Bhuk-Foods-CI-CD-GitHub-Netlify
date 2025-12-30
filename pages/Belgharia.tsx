import React from 'react';
import { SUBSCRIPTION_FORM_URL } from '../constants';

const Belgharia: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF8E1] dark:bg-slate-950 pt-24 pb-12 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden shadow-xl mb-12 h-64 md:h-80">
          <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000" alt="Belgharia Culture" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-2">Belgharia</h1>
            <p className="text-lg md:text-xl opacity-90">Culture, Education & Connectivity.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <section className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-orange-100 dark:border-slate-800 transition-colors duration-500">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">The Gateway to North Suburbs</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Belgharia serves as a major junction connecting Kolkata to its northern suburbs. Known for its rich cultural heritage, old cinema halls, and jute mills, it retains a classic Bengali charm.
              </p>
            </section>
          </div>
          <div className="md:col-span-1">
            <div className="bg-slate-900 dark:bg-slate-800 text-white p-6 rounded-2xl sticky top-24 border border-slate-800 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-4">Students in Belgharia?</h3>
              <a href={SUBSCRIPTION_FORM_URL} target="_blank" rel="noopener noreferrer" className="block w-full bg-[#D32F2F] text-center py-3 rounded-lg font-bold hover:bg-[#b71c1c] transition-colors">Check Student Plans</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Belgharia;