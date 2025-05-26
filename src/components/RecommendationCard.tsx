import React from 'react';
import { Recommendation } from '../types';

interface RecommendationCardProps {
  recommendation: Recommendation;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ recommendation }) => {
  if (recommendation.html) {
    return (
      <div 
        dangerouslySetInnerHTML={{ __html: recommendation.html }}
      />
    );
  }

  return null;
};

export default RecommendationCard;