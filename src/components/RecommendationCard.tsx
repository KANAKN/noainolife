import React from 'react';
import { Recommendation } from '../types';

interface RecommendationCardProps {
  recommendation: Recommendation;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ recommendation }) => {
  if (recommendation.html) {
    return (
      <div 
        className="w-20 h-full flex items-stretch"
        dangerouslySetInnerHTML={{ 
          __html: recommendation.html.replace(
            'margin:5px;',
            'margin:0;'
          ).replace(
            'margin:0px;',
            'margin:0;'
          ).replace(
            'padding:5px 0;',
            'padding:12px;'
          )
        }}
      />
    );
  }

  return null;
};

export default RecommendationCard;