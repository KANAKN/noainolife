import React from 'react';
import { Share2 } from 'lucide-react';

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
  
  const shareToLine = () => {
    window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  return (
    <div className="mt-8">
      <h3 className="flex items-center text-lg font-medium text-gray-700 mb-3">
        <Share2 className="w-5 h-5 mr-2" />
        結果をシェアする
      </h3>
      <div className="flex gap-3">
        <button 
          onClick={shareToFacebook}
          className="flex-1 py-2 px-4 bg-[#1877F2] text-white rounded-lg hover:bg-[#166FE5] transition-colors"
        >
          Facebook
        </button>
        <button 
          onClick={shareToTwitter}
          className="flex-1 py-2 px-4 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1A91DA] transition-colors"
        >
          Twitter
        </button>
        <button 
          onClick={shareToLine}
          className="flex-1 py-2 px-4 bg-[#00B900] text-white rounded-lg hover:bg-[#009900] transition-colors"
        >
          LINE
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;