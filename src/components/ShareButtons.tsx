import React from 'react';
import { Share2, Facebook, Download } from 'lucide-react';

interface ShareButtonsProps {
  resultType: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ resultType }) => {
  const shareUrl = 'https://noainolife.vercel.app/';
  const shareText = `AIタイプ診断の結果「${resultType}」でした！\nあなたのタイプも教えて！\n\n診断はこちら👇\n${shareUrl}\n\n#NOAINOLIFE診断\n#AIタイプ診断`;
  
  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`, '_blank');
  };
  
  const shareToX = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`, '_blank');
  };
  
  const shareToLine = () => {
    window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`, '_blank');
  };

  const downloadImage = () => {
    const getImagePath = (type: string) => {
      switch (type) {
        case 'リアリスト型':
          return '/real.png';
        case 'ロマンチスト型':
          return '/roman.png';
        case 'シンクロニスト型':
          return '/sync.png';
        case 'エスケーパー型':
          return '/esc.png';
        default:
          return '/share-default.png';
      }
    };

    const link = document.createElement('a');
    link.href = getImagePath(resultType);
    link.download = `aitype-${resultType}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mt-8 mb-8">
      <div className="flex flex-col items-center gap-6">
        <button 
          onClick={downloadImage}
          className="py-3 px-6 bg-gray-700 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          <Download className="w-5 h-5" />
          <span>画像を保存</span>
        </button>
        <div className="flex flex-wrap gap-3 justify-center">
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
    </div>
  );
};

export default ShareButtons;