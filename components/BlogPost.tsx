import React from 'react';
import { BlogPost as BlogPostType, Language } from '../types';

interface BlogPostProps {
  post: BlogPostType;
  lang: Language;
  onReadMore: (post: BlogPostType) => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, lang, onReadMore }) => {
  
  const handleShare = (e: React.MouseEvent, platform: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    // In a real app with individual routes, this would be the specific post URL
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(lang === 'bn' ? post.titleBn : post.title);
    
    let shareLink = '';
    
    switch (platform) {
      case 'whatsapp':
        shareLink = `https://wa.me/?text=${title}%20${url}`;
        break;
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
        break;
    }
    
    if (shareLink) {
      window.open(shareLink, '_blank', 'width=600,height=400');
    }
  };

  return (
    <article 
      className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-orange-100 dark:border-slate-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full group cursor-pointer"
      onClick={() => onReadMore(post)}
    >
      <div className="flex flex-col mb-4">
        <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
          {post.date}
        </span>
        <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {post.readTime || '3 min'} read
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight font-bengali-support group-hover:text-[#D32F2F] transition-colors">
        {lang === 'bn' ? post.titleBn : post.title}
      </h3>
      
      <p className="text-slate-600 dark:text-slate-300 mb-6 flex-1 text-sm leading-relaxed">
        {lang === 'bn' ? post.excerptBn : post.excerpt}
      </p>
      
      <div className="mt-auto pt-4 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
        <button 
          onClick={(e) => { e.stopPropagation(); onReadMore(post); }}
          className="text-[#D32F2F] text-sm font-bold hover:underline cursor-pointer inline-flex items-center gap-1 focus:outline-none"
        >
          {lang === 'bn' ? 'আরও পড়ুন' : 'Read Article'} 
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>

        <div className="flex items-center gap-1">
          {/* WhatsApp */}
          <button 
            onClick={(e) => handleShare(e, 'whatsapp')} 
            className="p-2 rounded-full text-slate-400 hover:text-[#25D366] hover:bg-green-50 dark:hover:bg-slate-800 transition-all duration-200"
            title="Share on WhatsApp"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.683-2.031-9.667-.272-.099-.47-.149-.669-.149-.198 0-.42.001-.643.001-.223 0-.586.085-.892.411-.307.326-1.173 1.147-1.173 2.798 0 1.651 1.202 3.245 1.37 3.469.168.224 2.366 3.614 5.732 5.067 2.298.992 2.766.795 3.261.745.495-.05 1.583-.647 1.806-1.272.223-.625.223-1.161.156-1.272z"/></svg>
          </button>
          
          {/* Facebook */}
          <button 
            onClick={(e) => handleShare(e, 'facebook')}
            className="p-2 rounded-full text-slate-400 hover:text-[#1877F2] hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-200"
            title="Share on Facebook"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </button>

          {/* Twitter / X */}
          <button 
            onClick={(e) => handleShare(e, 'twitter')}
            className="p-2 rounded-full text-slate-400 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
            title="Share on X (Twitter)"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;