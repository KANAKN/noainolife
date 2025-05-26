import React from 'react';
import { Share2, Facebook, Instagram } from 'lucide-react';

interface ShareButtonsProps {
  resultType: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ resultType }) => {
  const shareUrl = window.location.href;
  const shareText = `私はAI信仰度診断で「${resultType}」タイプでした。\n\nあなたは何タイプ？　診断はこちらから　\n\n#NoAINoLife診断 #AIタイプ診断 #生成AI`;
  
  const getShareImage = (type: string) => {
    switch (type) {
      case 'リアリスト型':
        return '/share-realist.png';
      case 'ロマンチスト型':
        return '/share-romantic.png';
      case 'シンクロニスト型':
        return '/share-syncronist.png';
      case 'エスケーパー型':
        return '/share-escaper.png';
      default:
        return '/share-default.png';
    }
  };

  const shareImage = getShareImage(resultType);
  
  const shareToFacebook = () => {
    // Facebook SDKを使用せずにシェアダイアログを開く
    const fbShareUrl = new URL('https://www.facebook.com/dialog/share');
    fbShareUrl.searchParams.append('href', shareUrl);
    fbShareUrl.searchParams.append('display', 'popup');
    fbShareUrl.searchParams.append('quote', shareText);
    
    const width = 626;
    const height = 436;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    window.open(
      fbShareUrl.toString(),
      'facebook-share-dialog',
      `width=${width},height=${height},left=${left},top=${top},toolbar=0,status=0`
    );
  };
  
  const shareToX = () => {
    const xShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    const width = 550;
    const height = 420;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    window.open(
      xShareUrl,
      'twitter-share-dialog',
      `width=${width},height=${height},left=${left},top=${top},toolbar=0,status=0`
    );
  };
  
  const shareToInstagram = () => {
    // Instagramはウェブからの直接共有APIがないため、
    // 画像をダウンロードしてもらう方式に変更
    const a = document.createElement('a');
    a.href = shareImage;
    a.download = `noainolife-${resultType}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.open('https://www.instagram.com', '_blank');
  };
  
  const shareToLine = () => {
    const lineShareUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
    const width = 500;
    const height = 500;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    window.open(
      lineShareUrl,
      'line-share-dialog',
      `width=${width},height=${height},left=${left},top=${top},toolbar=0,status=0`
    );
  };

  return (
    <div className="mt-8 mb-8">
      <h3 className="flex items-center justify-center text-lg font-medium text-[#ffff30] mb-3">
        <Share2 className="w-5 h-5 mr-2" />
        結果をシェアする
      </h3>
      <div className="mb-4">
        <img 
          src={shareImage} 
          alt={`${resultType}の診断結果`} 
          className="w-full max-w-md mx-auto rounded-lg shadow-lg"
        />
      </div>
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