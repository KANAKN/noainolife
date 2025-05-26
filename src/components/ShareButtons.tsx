import React, { useState } from 'react';
import { Share2, Facebook, Copy, Check } from 'lucide-react';

interface ShareButtonsProps {
  resultType: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ resultType }) => {
  const [copied, setCopied] = useState(false);
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

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  
  const shareToLine = () => {
    const lineImageUrl = getLineShareImage(resultType);
    const url = new URL('https://social-plugins.line.me/lineit/share');
    url.searchParams.set('url', shareUrl);
    url.searchParams.set('text', shareText);
    
    if (lineImageUrl) {
      url.searchParams.set('image', lineImageUrl);
    }
    
    openShareWindow(url.toString(), 'LINE', 500, 500);
  };

  const getLineShareImage = (type: string) => {
    switch (type) {
      case 'リアリスト型':
        return 'https://raw.githubusercontent.com/stackblitz/bolt/main/assets/share-realist.png';
      case 'ロマンチスト型':
        return 'https://raw.githubusercontent.com/stackblitz/bolt/main/assets/share-romantic.png';
      case 'シンクロニスト型':
        return 'https://raw.githubusercontent.com/stackblitz/bolt/main/assets/share-syncronist.png';
      case 'エスケーパー型':
        return 'https://raw.githubusercontent.com/stackblitz/bolt/main/assets/share-escaper.png';
      default:
        return 'https://raw.githubusercontent.com/stackblitz/bolt/main/assets/share-default.png';
    }
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
          onClick={shareToLine}
          className="py-3 md:py-2 px-4 bg-[#00B900] text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          <span>LINE</span>
        </button>
        <button 
          onClick={copyToClipboard}
          className="py-3 md:py-2 px-4 bg-gray-700 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          {copied ? (
            <>
              <Check className="w-5 h-5" />
              <span>コピーしました</span>
            </>
          ) : (
            <>
              <Copy className="w-5 h-5" />
              <span>リンクをコピー</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;