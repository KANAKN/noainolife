import React from 'react';
import { Recommendation } from '../types';

interface RecommendationCardProps {
  recommendation: Recommendation;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ recommendation }) => {
  return (
    <div className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative w-full h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
        <img 
          src={recommendation.imageUrl} 
          alt={recommendation.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6 flex-grow bg-gradient-to-b from-white to-gray-50">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{recommendation.title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{recommendation.description}</p>
      </div>
      <div className="px-6 pb-6">
        <a 
          href={recommendation.affiliateLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center rounded-lg hover:opacity-90 transition-opacity font-medium shadow-md hover:shadow-lg"
        >
          詳しく見る →
        </a>
      </div>
    </div>
  );
};

export default RecommendationCard;