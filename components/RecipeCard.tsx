import React, { useState } from 'react';
import { Recipe, Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface RecipeCardProps {
  recipe: Recipe;
  lang: Language;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, lang }) => {
  const t = TRANSLATIONS[lang];
  const [showIngredients, setShowIngredients] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const isBn = lang === 'bn';

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg overflow-hidden border border-orange-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-300 flex flex-col group">
      <div className="h-56 overflow-hidden relative">
        <img 
          src={recipe.image} 
          alt={isBn ? recipe.titleBn : recipe.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {recipe.tags.map((tag, idx) => (
             <span key={idx} className="bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
               {tag}
             </span>
          ))}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight font-bengali-support">
            {isBn ? recipe.titleBn : recipe.title}
          </h3>
        </div>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
          {isBn ? recipe.descriptionBn : recipe.description}
        </p>

        <div className="flex items-center gap-6 mb-6 text-sm text-slate-500 dark:text-slate-400 border-t border-b border-slate-100 dark:border-slate-800 py-3">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-[#D32F2F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className="font-semibold">{t.prep_time}:</span> {recipe.prepTime}
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-[#D32F2F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span className="font-semibold">{t.servings}:</span> {recipe.servings}
          </div>
        </div>

        <div className="space-y-2 mt-auto">
          {/* Ingredients Toggle */}
          <div className="border border-orange-100 dark:border-slate-800 rounded-lg overflow-hidden">
            <button 
              onClick={() => setShowIngredients(!showIngredients)}
              className="w-full px-4 py-3 text-left text-sm font-bold text-slate-700 dark:text-slate-200 bg-orange-50 dark:bg-slate-800 flex justify-between items-center hover:bg-orange-100 dark:hover:bg-slate-700 transition-colors"
            >
              {t.ingredients}
              <span className={`transform transition-transform ${showIngredients ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {showIngredients && (
              <ul className="p-4 bg-white dark:bg-slate-900 list-disc pl-8 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                {(isBn ? recipe.ingredientsBn : recipe.ingredients).map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Instructions Toggle */}
          <div className="border border-orange-100 dark:border-slate-800 rounded-lg overflow-hidden">
             <button 
              onClick={() => setShowInstructions(!showInstructions)}
              className="w-full px-4 py-3 text-left text-sm font-bold text-white bg-slate-800 dark:bg-slate-700 flex justify-between items-center hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
            >
              {t.instructions}
              <span className={`transform transition-transform ${showInstructions ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {showInstructions && (
              <ol className="p-4 bg-white dark:bg-slate-900 list-decimal pl-8 text-sm text-slate-600 dark:text-slate-300 space-y-2">
                {(isBn ? recipe.instructionsBn : recipe.instructions).map((inst, i) => (
                  <li key={i}>{inst}</li>
                ))}
              </ol>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;