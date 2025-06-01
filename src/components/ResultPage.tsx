import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Results from './Results';
import { results } from '../data/results';

interface ResultPageProps {
  onRestart: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ onRestart }) => {
  const { type } = useParams();
  
  const getResultType = (urlType: string | undefined) => {
    switch (urlType) {
      case 'realist':
        return 'リアリスト型';
      case 'romantic':
        return 'ロマンチスト型';
      case 'synchronist':
        return 'シンクロニスト型';
      case 'escaper':
        return 'エスケーパー型';
      default:
        return null;
    }
  };

  const resultType = getResultType(type);
  const result = results.find(r => r.type === resultType);

  useEffect(() => {
    if (result) {
      const baseUrl = 'https://noainolife.vercel.app';
      const imageUrl = `${baseUrl}/share-${type}.png`;
      const pageUrl = `${baseUrl}/result/${type}`;
      const title = `${result.type} - AIタイプ診断 / NO AI, NO LIFE`;

      document.title = title;

      const metaTags = {
        'og:title': title,
        'og:description': result.description,
        'og:url': pageUrl,
        'og:image': imageUrl,
        'og:image:width': '1200',
        'og:image:height': '630',
        'og:image:alt': `${type}-img`,
        'twitter:title': title,
        'twitter:description': result.description,
        'twitter:image': imageUrl,
        'twitter:image:alt': `${type}-img`,
        'twitter:url': pageUrl
      };

      Object.entries(metaTags).forEach(([key, value]) => {
        const propertySelector = `meta[property="${key}"]`;
        const nameSelector = `meta[name="${key}"]`;
        
        const propertyElement = document.querySelector(propertySelector);
        const nameElement = document.querySelector(nameSelector);

        if (propertyElement) {
          propertyElement.setAttribute('content', value);
        }
        if (nameElement) {
          nameElement.setAttribute('content', value);
        }
      });
    }
  }, [result, type]);

  if (!result) {
    return <Navigate to="/\" replace />;
  }

  return <Results result={result} totalScore={0} onRestart={onRestart} />;
};

export default ResultPage;