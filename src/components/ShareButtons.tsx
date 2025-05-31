import React from 'react';
import { Share2, Facebook, Instagram } from 'lucide-react';

interface ShareButtonsProps {
  resultType: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ resultType }) => {
  const shareUrl = 'https://noainolife.vercel.app/';
  const shareText = `AIタイプ診断で自分は「${resultType}」でした！\n\n診断はこちら👇\n${shareUrl}`;
  
  const getShareImage = () => {
    switch (resultType) {
      case 'リアリスト型':
        return `${shareUrl}r.png`;
      case 'ロマンチスト型':
        return `${shareUrl}l.png`;
      case 'シンクロニスト型':
        return `${shareUrl}s.png`;
      case 'エスケーパー型':
        return `${shareUrl}e.png`;
      default:
        return `${shareUrl}r.png`;
    }
  };
  
  const shareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };
  
  const shareToX = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };
  
  const shareToInstagram = () => {
    window.open('https://www.instagram.com', '_blank');
  };
  
  const shareToLine = () => {
    const url = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="mt-8 mb-8">
      <h3 className="flex items-center justify-center text-lg font-medium text-[#ffff30] mb-3">
        <Share2 className="w-5 h-5 mr-2" />
        結果をシェアする
      </h3>
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
          onClick={shareToInstagram}
          className="py-3 md:py-2 px-4 bg-[#E4405F] text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          <Instagram className="w-5 h-5" />
          <span>Instagram</span>
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