import React from 'react';
import { Share2, Facebook } from 'lucide-react';

interface ShareButtonsProps {
  resultType: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ resultType }) => {
  const shareUrl = 'https://noainolife.vercel.app/';
  const shareText = `AIタイプ診断で自分は「${resultType}」でした！\n\n診断はこちら👇\n${shareUrl}`;
  
  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`, '_blank');
  };
  
  const shareToX = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`, '_blank');
  };
  
  const shareToLine = () => {
    window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`, '_blank');
  };

  return (
    <div className="mt-8 mb-8">
      <div className="flex flex-col md:flex-row gap-3">
        <button 
          onClick={shareToFacebook}
          className="py-3 md:py-2 px-4 bg-[#1877F2] text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          <Facebook className="w-5 h-5" />
          <span>Facebook</span>
        </button>
        <button 
          onClick={shareToX}
          className="py-3 md:py-2 px-4 bg-black text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          <span>X</span>
        </button>
        <button 
          onClick={shareToLine}
          className="py-3 md:py-2 px-4 bg-[#00B900] text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          <span>LINE</span>
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;