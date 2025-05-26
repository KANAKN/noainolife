import React from 'react';
import { Share2, Facebook, Instagram } from 'lucide-react';

interface ShareButtonsProps {
  resultType: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ resultType }) => {
  const shareUrl = window.location.href;
  const shareText = `私はAI信仰度診断で「${resultType}」タイプでした。\n\nあなたは何タイプ？　診断はこちらから　\n\n#NoAINoLife診断 #AIタイプ診断 #生成AI`;
  
  const openShareWindow = (url: string, title: string, width: number, height: number) => {
    const left = Math.floor((window.innerWidth - width) / 2);
    const top = Math.floor((window.innerHeight - height) / 2);
    
    return window.open(
      url,
      title,
      `width=${width},height=${height},left=${left},top=${top},toolbar=no,menubar=no,location=no,status=no,scrollbars=yes`
    );
  };
  
  const shareToFacebook = () => {
    const fbShareUrl = new URL('https://www.facebook.com/sharer/sharer.php');
    fbShareUrl.searchParams.append('u', shareUrl);
    fbShareUrl.searchParams.append('quote', shareText);
    
    openShareWindow(fbShareUrl.toString(), 'facebook-share-dialog', 626, 436);
  };
  
  const shareToX = () => {
    const xShareUrl = new URL('https://twitter.com/intent/tweet');
    xShareUrl.searchParams.append('text', shareText);
    xShareUrl.searchParams.append('url', shareUrl);
    
    openShareWindow(xShareUrl.toString(), 'twitter-share-dialog', 550, 420);
  };
  
  const shareToInstagram = () => {
    window.open('https://www.instagram.com', '_blank');
  };
  
  const shareToLine = () => {
    const lineShareUrl = new URL('https://social-plugins.line.me/lineit/share');
    lineShareUrl.searchParams.append('url', shareUrl);
    lineShareUrl.searchParams.append('text', shareText);
    
    openShareWindow(lineShareUrl.toString(), 'line-share-dialog', 500, 500);
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