import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, RECIPES } from '../constants';
import RecipeCard from '../components/RecipeCard';

interface RecipesProps {
  lang: Language;
}

const Recipes: React.FC<RecipesProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen bg-[#FFF8E1] dark:bg-slate-950 pt-24 pb-16 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 font-bengali-support">
            {t.recipes_title}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {t.recipes_subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {RECIPES.map((recipe, idx) => (
            <div key={recipe.id} className="animate-on-scroll" style={{ transitionDelay: `${idx * 100}ms` }}>
              <RecipeCard recipe={recipe} lang={lang} />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
           <div className="bg-white dark:bg-slate-900 inline-block p-8 rounded-2xl shadow-xl border border-orange-200 dark:border-slate-800 max-w-2xl">
              <h3 className="text-xl font-bold mb-2 text-[#D32F2F]">Secret Ingredient?</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                "The best food is made not just with spices, but with patience." 
                <br/>— That is why Bhuk Foods cooks on low flame for hours.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;