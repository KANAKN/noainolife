import React, { useEffect } from 'react';
import { Result } from '../types';
import RecommendationCard from './RecommendationCard';
import ShareButtons from './ShareButtons';
import { Sparkles } from 'lucide-react';

interface ResultsProps {
  result: Result;
  totalScore: number;
  onRestart: () => void;
}

const Results: React.FC<ResultsProps> = ({ result, totalScore, onRestart }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'リアリスト型':
        return '#004aad';
      case 'ロマンチスト型':
        return '#df71da';
      case 'シンクロニスト型':
        return '#8fff00';
      case 'エスケーパー型':
        return '#9d1939';
      default:
        return '#004aad';
    }
  };

  const typeColor = getTypeColor(result.type);

  return (
    <div className="w-full animate-fadeIn">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-4">
        <div 
          className="p-6"
          style={{ backgroundColor: typeColor }}
        >
          <h2 className="text-3xl font-bold text-white text-center">
            {result.type}
          </h2>
        </div>
        
        <div className="p-8 space-y-4">
          <div className="border-b border-gray-100 pb-4">
            <h3 
              className="text-sm font-semibold uppercase tracking-wider mb-2"
              style={{ color: typeColor }}
            >
              キャッチコピー
            </h3>
            <p className="text-2xl font-bold text-gray-800">
              {result.title}
            </p>
          </div>

          <div className="border-b border-gray-100 pb-4">
            <h3 
              className="text-sm font-semibold uppercase tracking-wider mb-2"
              style={{ color: typeColor }}
            >
              特徴と性格傾向
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {result.description}
            </p>
          </div>

          <div className="border-b border-gray-100 pb-4">
            <h3 
              className="text-sm font-semibold uppercase tracking-wider mb-2"
              style={{ color: typeColor }}
            >
              AIとの関係性
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {result.aiRelationship}
            </p>
          </div>

          <div>
            <h3 
              className="text-sm font-semibold uppercase tracking-wider mb-2"
              style={{ color: typeColor }}
            >
              注意点
            </h3>
            <div 
              className="border-l-4 p-4 rounded"
              style={{ 
                backgroundColor: `${typeColor}15`,
                borderColor: typeColor
              }}
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                {result.cautionPoint}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <ShareButtons resultType={result.type} />
      </div>

      <div className="bg-gray-50 rounded-xl p-4 mb-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          あなたにおすすめのアイテム
        </h3>
        {result.recommendations.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-2 last:mb-0">
            <h4 className="text-lg font-medium text-gray-700 mb-1">
              {category.subtitle}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="h-full">
                  <div className="w-full h-full bg-white rounded-lg shadow-sm p-2">
                    <RecommendationCard recommendation={item} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={onRestart}
          className="px-6 py-3 bg-white text-gray-800 rounded-lg hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg"
        >
          もう一度診断する
        </button>
      </div>
    </div>
  );
};

export default Results;