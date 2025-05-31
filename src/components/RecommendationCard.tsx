import React from 'react';
import { Recommendation } from '../types';

interface RecommendationCardProps {
  recommendation: Recommendation;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ recommendation }) => {
  if (recommendation.html) {
    // Replace width in the HTML string from any existing value to 200px
    const updatedHtml = recommendation.html
      .replace(/width:\s*\d+px/g, 'width:200px')
      .replace(/width="\d+"/g, 'width="200"')
      .replace(/width=\d+/g, 'width="200"');

    return (
      <div 
        className="w-[200px]"
        dangerouslySetInnerHTML={{ 
          __html: updatedHtml.replace(
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