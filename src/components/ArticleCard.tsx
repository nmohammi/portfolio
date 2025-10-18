import React from 'react';
import Image from 'next/image';

function getImagePath(imagePath: string): string {
  // For subfolder images, we need to handle basePath manually
  if (imagePath.startsWith('/education/') || imagePath.startsWith('/articles/')) {
    return `${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}${imagePath}`;
  }
  return imagePath;
}

interface ArticleCardProps {
  article: {
    id: number;
    title: string;
    excerpt: string;
    readTime: string;
    date: string;
    category: string;
    tags: string[];
    url: string;
    image?: string;
  };
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, featured = false }) => {
  return (
    <div className="group">
      <div className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-primary-300 h-full flex flex-col ${featured ? 'lg:p-8' : ''}`}>
        {article.image && (
          <div className="mb-4 -mt-2 rounded-lg overflow-hidden">
            <Image
              src={getImagePath(article.image)}
              alt={article.title}
              width={800}
              height={450}
              className={`w-full object-cover ${featured ? 'h-56' : 'h-40'}`}
            />
          </div>
        )}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className={`px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium ${featured ? 'px-3' : ''}`}>
                {article.category}
              </span>
              <span className="text-gray-500 text-sm">{article.readTime}</span>
            </div>
            
            <h3 className={`font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2 ${featured ? 'text-2xl' : 'text-xl'}`}>
              {article.title}
            </h3>
            
            <p className={`text-gray-600 leading-relaxed mb-4 flex-1 ${featured ? 'text-lg' : ''}`}>
              {article.excerpt}
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.slice(0, featured ? 4 : 3).map((tag, tagIndex) => (
            <span 
              key={tagIndex}
              className={`px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium ${featured ? 'px-3' : ''}`}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-gray-500 text-sm">
            {new Date(article.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}
          </span>
          
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
          >
            Read more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
