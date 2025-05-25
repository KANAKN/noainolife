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

  return (
    <div className="w-full animate-fadeIn">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center mb-4 p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          {result.title}
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          {result.description}
        </p>
      </div>

      <div className="mt-8 mb-6">
        <h3 className="text-xl font-medium text-gray-800 mb-4">
          あなたにおすすめのアイテム：
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {result.recommendations.map((recommendation, index) => (
            <RecommendationCard key={index} recommendation={recommendation} />
          ))}
        </div>
      </div>

      <ShareButtons resultType={result.type} />

      <div className="mt-10 text-center">
        <button
          onClick={onRestart}
          className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors"
        >
          もう一度診断する
        </button>
      </div>
    </div>
  );
};

export default Results;