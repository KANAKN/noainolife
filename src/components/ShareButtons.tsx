import React from 'react';
import { Share2, Facebook, Twitter, Instagram } from 'lucide-react';

interface ShareButtonsProps {
  resultType: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ resultType }) => {
  const shareUrl = window.location.href;
  const shareText = `パーソナリティ診断で「${resultType}」タイプとわかりました！あなたも診断してみませんか？`;
  
  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`, '_blank');
  };
  
  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
  };
  
  const shareToInstagram = () => {
    window.open('https://www.instagram.com', '_blank');
  };
  
  const shareToLine = () => {
    window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const buttonClasses = "py-3 md:py-2 px-4 bg-gradient-to-r from-[#004aad] to-[#9d1939] text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2";

  return (
    <div className="mt-8">
      <h3 className="flex items-center text-lg font-medium text-gray-700 mb-3">
        <Share2 className="w-5 h-5 mr-2" />
        結果をシェアする
      </h3>
      <div className="flex flex-col md:flex-row gap-3">
        <button 
          onClick={shareToFacebook}
          className={buttonClasses}
        >
          <Facebook className="w-5 h-5" />
          <span>Facebook</span>
        </button>
        <button 
          onClick={shareToTwitter}
          className={buttonClasses}
        >
          <Twitter className="w-5 h-5" />
          <span>Twitter</span>
        </button>
        <button 
          onClick={shareToInstagram}
          className={buttonClasses}
        >
          <Instagram className="w-5 h-5" />
          <span>Instagram</span>
        </button>
        <button 
          onClick={shareToLine}
          className={buttonClasses}
        >
          <span>LINE</span>
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;