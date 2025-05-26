import React from 'react';
import { Share2, Facebook, Instagram } from 'lucide-react';

interface ShareButtonsProps {
  resultType: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ resultType }) => {
  const shareUrl = window.location.href;
  const shareText = `私はAI信仰度診断で「${resultType}」タイプでした！\n\nあなたは何タイプ？ 今すぐ診断してみよう！\n\n#NoAINoLife診断 #AIタイプ診断 #生成AI`;
  
  const openShareWindow = (url: string, title: string, width: number, height: number) => {
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

    const screenWidth = window.innerWidth || document.documentElement.clientWidth || screen.width;
    const screenHeight = window.innerHeight || document.documentElement.clientHeight || screen.height;

    const left = (screenWidth - width) / 2 + dualScreenLeft;
    const top = (screenHeight - height) / 2 + dualScreenTop;

    const features = `
      width=${width},
      height=${height},
      top=${top},
      left=${left},
      status=no,
      menubar=no,
      toolbar=no,
      resizable=yes,
      scrollbars=yes
    `.replace(/\s+/g, '');

    return window.open(url, title, features);
  };
  
  const shareToFacebook = () => {
    const url = new URL('https://www.facebook.com/sharer/sharer.php');
    url.searchParams.set('u', shareUrl);
    url.searchParams.set('quote', shareText);
    
    openShareWindow(url.toString(), 'Facebook', 626, 436);
  };
  
  const shareToX = () => {
    const url = new URL('https://twitter.com/intent/tweet');
    url.searchParams.set('text', shareText);
    url.searchParams.set('url', shareUrl);
    
    openShareWindow(url.toString(), 'X', 550, 420);
  };
  
  const shareToInstagram = () => {
    window.open('https://www.instagram.com', '_blank');
  };
  
  const shareToLine = () => {
    const url = new URL('https://social-plugins.line.me/lineit/share');
    url.searchParams.set('url', shareUrl);
    url.searchParams.set('text', shareText);
    
    openShareWindow(url.toString(), 'LINE', 500, 500);
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