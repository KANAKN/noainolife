import React, { useEffect, useRef } from 'react';
import { Recommendation } from '../types';

interface RecommendationCardProps {
  recommendation: Recommendation;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ recommendation }) => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (recommendation.rakutenWidget && widgetRef.current) {
      // 既存のコンテンツをクリア
      widgetRef.current.innerHTML = '';
      
      // スクリプトを作成して追加
      const container = document.createElement('div');
      container.innerHTML = recommendation.rakutenWidget;
      
      const scripts = container.getElementsByTagName('script');
      Array.from(scripts).forEach(script => {
        const newScript = document.createElement('script');
        
        // 属性をコピー
        Array.from(script.attributes).forEach(attr => {
          newScript.setAttribute(attr.name, attr.value);
        });
        
        // コンテンツをコピー
        newScript.textContent = script.textContent;
        
        // 古いスクリプトを新しいものに置き換え
        if (widgetRef.current) {
          widgetRef.current.appendChild(newScript);
        }
      });
    }
  }, [recommendation.rakutenWidget]);

  if (recommendation.rakutenWidget) {
    return (
      <div 
        ref={widgetRef}
        className="bg-white rounded-lg overflow-hidden border border-gray-200 p-4 min-h-[80px]"
      />
    );
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
      <div className="p-4">
        <div className="flex">
          <div className="w-32 h-32 flex-shrink-0">
            <a 
              href={recommendation.affiliateLink} 
              target="_blank" 
              rel="nofollow sponsored noopener"
              className="block w-full h-full"
            >
              <img 
                src={recommendation.imageUrl} 
                alt={recommendation.title}
                className="w-full h-full object-contain"
              />
            </a>
          </div>
          <div className="ml-4 flex-grow">
            <a 
              href={recommendation.affiliateLink}
              target="_blank" 
              rel="nofollow sponsored noopener"
              className="block text-lg font-medium text-gray-800 hover:text-gray-600 mb-2"
            >
              {recommendation.title}
            </a>
            <p className="text-sm text-gray-600">{recommendation.description}</p>
            {recommendation.price && (
              <p className="mt-2">
                <span className="text-base font-medium">{recommendation.price}</span>
                {recommendation.priceDate && (
                  <span className="text-gray-400 text-sm ml-2">({recommendation.priceDate}時点)</span>
                )}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;