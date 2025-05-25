import React from 'react';
import { Recommendation } from '../types';

interface RecommendationCardProps {
  recommendation: Recommendation;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ recommendation }) => {
  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="w-full h-48 overflow-hidden">
        <img 
          src={recommendation.imageUrl} 
          alt={recommendation.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-medium text-gray-800 mb-2">{recommendation.title}</h3>
        <p className="text-gray-600 mb-4">{recommendation.description}</p>
      </div>
      <div className="px-4 pb-4">
        <a 
          href={recommendation.affiliateLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full py-2 bg-[#9d1939] text-white text-center rounded-lg hover:opacity-95 transition-opacity"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default RecommendationCard;