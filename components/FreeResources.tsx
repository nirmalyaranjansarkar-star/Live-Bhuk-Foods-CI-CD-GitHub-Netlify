// FIX: Restored the full content of the file which was previously truncated, causing an import error.
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, FREE_RESOURCES_FORM_URL, RESOURCES } from '../constants';
import { trackEvent, GTM_EVENTS } from '../services/analytics';

interface FreeResourcesProps {
  lang: Language;
}

const FreeResources: React.FC<FreeResourcesProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const handleDownload = (resourceId: string) => {
    trackEvent('download_resource_click', { id: resourceId });
    window.open(FREE_RESOURCES_FORM_URL, '_blank');
  };

  return (
    <div id="resources" className="bg-[#FFF8E1] dark:bg-slate-900 py-16 border-y border-orange-200 dark:border-slate-800 relative overflow-hidden rounded-2xl transition-colors duration-500">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 animate-on-scroll">{t.resources_title}</h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 text-lg leading-relaxed animate-on-scroll delay-100">{t.resources_subtitle}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
          {RESOURCES.map((resource, idx) => (
            <div 
              key={resource.id} 
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border-2 border-transparent hover:border-orange-100 dark:hover:border-slate-600 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-on-scroll"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="mb-4 bg-[#FFF8E1] dark:bg-slate-700 w-20 h-20 flex items-center justify-center rounded-full flex-shrink-0 text-4xl transform transition-transform group-hover:scale-110">
                {resource.icon}
              </div>
              <div className="flex-1 flex flex-col items-center">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3 leading-tight min-h-[3.5rem] flex items-center justify-center">
                  {lang === 'bn' ? resource.titleBn : resource.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                  {lang === 'bn' ? resource.descriptionBn : resource.description}
                </p>
              </div>
              
              <button
                onClick={() => handleDownload(resource.id)}
                className="bg-slate-800 dark:bg-slate-700 text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-[#D32F2F] dark:hover:bg-[#D32F2F] transition-all duration-300 flex items-center gap-2 w-full justify-center transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg"
              >
                Download PDF
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreeResources;
