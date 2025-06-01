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
      // Update meta tags
      document.title = `${result.type} - NO AI, NO LIFE AIタイプ診断`;
      
      const metaTags = {
        'og:title': `${result.type} - NO AI, NO LIFE AIタイプ診断`,
        'og:description': result.description,
        'og:type': 'website',
        'og:url': `https://noainolife.vercel.app/result/${type}`,
        'og:image': `https://noainolife.vercel.app/share-${type}.png`,
        'og:image:width': '1200',
        'og:image:height': '630',
        'og:site_name': 'NO AI, NO LIFE',
        'twitter:card': 'summary_large_image',
        'twitter:title': `${result.type} - NO AI, NO LIFE AIタイプ診断`,
        'twitter:description': result.description,
        'twitter:image': `https://noainolife.vercel.app/share-${type}.png`
      };

      Object.entries(metaTags).forEach(([property, content]) => {
        let element = document.querySelector(`meta[property="${property}"]`);
        if (!element) {
          element = document.querySelector(`meta[name="${property}"]`);
        }
        if (element) {
          element.setAttribute('content', content);
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