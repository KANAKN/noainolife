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

declare global {
  interface Window {
    updateOGImage: (type: string) => void;
  }
}

const Results: React.FC<ResultsProps> = ({ result, totalScore, onRestart }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    window.updateOGImage?.(result.type);
  }, [result.type]);

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

  const getResultPath = (type: string) => {
    switch (type) {
      case 'リアリスト型':
        return 'realist';
      case 'ロマンチスト型':
        return 'romantic';
      case 'シンクロニスト型':
        return 'synchronist';
      case 'エスケーパー型':
        return 'escaper';
      default:
        return 'default';
    }
  };

  const typeColor = getTypeColor(result.type);
  const resultPath = getResultPath(result.type);

  return (
    <div className="w-full animate-fadeIn">
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        診断結果
      </h1>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-4">
        <div 
          className="p-6"
          style={{ backgroundColor: typeColor }}
        >
          <h2 className="text-3xl font-bold text-white text-center">
            あなたは {result.type}
          </h2>
        </div>
        
        <div className="p-8 space-y-4">
          <h3 
            className="text-sm font-semibold uppercase tracking-wider mb-2 text-left"
            style={{ color: typeColor }}
          >
            特徴と傾向
          </h3>          
          <div className="border-b border-gray-100 pb-4">
            <p className="text-xl font-bold text-gray-800">
              {result.description}
            </p>
            <p className="text-xl font-bold text-gray-800">
              {result.description2}
            </p>
          </div>
          <div>
            <h3 
              className="text-sm font-semibold uppercase tracking-wider mb-2 text-left"
              style={{ color: typeColor }}
            >
              あなたへのヒント
            </h3>
            <div 
              className="border-l-4 p-4 rounded"
              style={{ 
                backgroundColor: `${typeColor}15`,
                borderColor: typeColor
              }}
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                {result.aiRelationship}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 mb-4">
        <h3 className="flex items-center justify-center text-lg font-medium text-[#ffff30] mb-6">
          <Sparkles className="w-5 h-5 mr-2" />
          あなたのシェア用画像
        </h3>
        <div className="flex justify-center mb-6">
          <img 
            src={`/share-${resultPath}.png`}
            alt={`${result.type}のシェア画像`}
            className="w-full max-w-2xl rounded-lg shadow-lg"
          />
        </div>
        <ShareButtons resultType={result.type} />

      </div>

      <div className="bg-gray-50 rounded-xl p-4 mb-4">
        <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
          PR あなたにおすすめのアイテム
        </h3>
        {result.recommendations.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8 last:mb-0">
            <h4 className="text-lg font-medium text-gray-700 mb-6 text-center whitespace-pre-line">
              {category.subtitle}
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex justify-center">
                  <RecommendationCard recommendation={item} />
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