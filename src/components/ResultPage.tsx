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
      
      const updateMetaTag = (selector: string, content: string) => {
        const element = document.querySelector(selector);
        if (element) {
          element.setAttribute('content', content);
        }
      };

      // Common meta tags
      updateMetaTag('meta[property="og:title"]', `${result.type} - NO AI, NO LIFE AIタイプ診断`);
      updateMetaTag('meta[property="og:description"]', result.description);
      updateMetaTag('meta[property="og:url"]', `https://noainolife.vercel.app/result/${type}`);
      updateMetaTag('meta[property="og:image"]', `https://noainolife.vercel.app/share-${type}.png`);
      
      // Twitter specific meta tags
      updateMetaTag('meta[name="twitter:title"]', `${result.type} - NO AI, NO LIFE AIタイプ診断`);
      updateMetaTag('meta[name="twitter:description"]', result.description);
      updateMetaTag('meta[name="twitter:image"]', `https://noainolife.vercel.app/share-${type}.png`);

      // Update image for sharing
      if (window.updateOGImage) {
        window.updateOGImage(result.type);
      }
    }
  }, [result, type]);

  if (!result) {
    return <Navigate to="/" replace />;
  }

  return <Results result={result} totalScore={0} onRestart={onRestart} />;
};

export default ResultPage;