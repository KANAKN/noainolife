import React, { useState } from 'react';
import { Share2, Facebook, Download, Copy, Check } from 'lucide-react';

interface ShareButtonsProps {
  resultType: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ resultType }) => {
  const [copied, setCopied] = useState(false);

  const getResultPath = (type: string) => {
    switch (type) {
      case 'リアリスト型':
        return 'realist';
      case 'ロマンチスト型':
        return 'romantic';
      case 'シンクロニスト型':
        return 'synchronist';
      case 'エスケーパー型':
        return 'escaper';
      default:
        return '';
    }
  };

  const baseUrl = 'https://noainolife.vercel.app';
  const resultPath = getResultPath(resultType);
  const shareUrl = `${baseUrl}/result/${resultPath}/`;
  const shareText = `AIタイプ診断したら「${resultType}」でした！\nあなたのタイプも教えて！\n\n#AIタイプ診断\n#生成AI\n#NOAINOLIFE\n`;
  
  const shareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };
  
  const shareToX = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };
  
  const shareToLine = () => {
    const url = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank', 'width=600,height=600');
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = `/share-${resultPath}.png`;
    link.download = `aitype-${resultPath}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


    const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText('https://noainolife.vercel.app/');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };
  
  return (
    <div className="mt-8 mb-8">
      <div className="flex flex-col items-center gap-6">
        <button 
          onClick={downloadImage}
          className="py-3 px-6 bg-gray-700 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          <Download className="w-5 h-5" />
          <span>診断結果を保存</span>
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
          <button 
            onClick={handleCopyLink}
            className="py-3 md:py-2 px-4  mb-30 bg-gray-600 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5" />
                <span>コピーしました</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" />
                <span>AIタイプ診断のURLをコピー</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareButtons;
