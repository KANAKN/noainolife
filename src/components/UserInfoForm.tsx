import React, { useState } from 'react';
import { UserInfo } from '../types';
import { Copy, Check, Facebook } from 'lucide-react';

interface UserInfoFormProps {
  onSubmit: (userInfo: UserInfo) => void;
}

const UserInfoForm: React.FC<UserInfoFormProps> = ({ onSubmit }) => {
  const [ageGroup, setAgeGroup] = useState('');
  const [gender, setGender] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ageGroup && gender) {
      onSubmit({ ageGroup, gender });
    }
  };

  const shareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://noainolife.vercel.app/')}`;
    window.open(url, '_blank', 'width=600,height=400');
  };
  
  const shareToX = () => {
    const text = 'AIタイプ診断で、あなたのAIとの向き合い方を診断してみよう！\n\n#AIタイプ診断 #生成AI #NOAINOLIFE';
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent('https://noainolife.vercel.app/')}`;
    window.open(url, '_blank', 'width=600,height=400');
  };
  
  const shareToLine = () => {
    const text = 'AIタイプ診断で、あなたのAIとの向き合い方を診断してみよう！';
    const url = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent('https://noainolife.vercel.app/')}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'width=600,height=600');
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

  const ageGroups = [
    '10-14歳', '15-19歳', '20-24歳', '25-29歳',
    '30-34歳', '35-39歳', '40-44歳', '45-49歳',
    '50-54歳', '55-59歳', '60-64歳', '65-69歳',
    '70-74歳', '75-79歳', '80-84歳', '85-89歳',
    '90歳以上'
  ];

  const genders = ['男性', '女性', 'その他', '回答しない'];

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-6">
          <label className="block text-[#ffff30] text-sm font-bold mb-2">
            性別
          </label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          >
            <option value="">選択してください</option>
            {genders.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-[#ffff30] text-sm font-bold mb-2">
            年齢
          </label>
          <select
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          >
            <option value="">選択してください</option>
            {ageGroups.map((age) => (
              <option key={age} value={age}>{age}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#af24d6] to-[#9d1939] text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity mb-8"
        >
          診断を始める
        </button>

        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/20"></div>
          </div>
        </div>

        <div className="text-center mb-6">
          <Sparkles className="w-5 h-5 mr-2" />
          <p className="text-[#ffff30] text-sm font-bold mb-4">AIタイプ診断をシェアする</p>
          <div className="flex justify-center gap-3 mb-8">
            <button
              type="button"
              onClick={shareToFacebook}
              className="py-2 px-4 bg-[#1877F2] text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Facebook className="w-5 h-5" />
              <span>Facebook</span>
            </button>
            <button
              type="button"
              onClick={shareToX}
              className="py-2 px-4 bg-black text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              X
            </button>
            <button
              type="button"
              onClick={shareToLine}
              className="py-2 px-4 bg-[#00B900] text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              LINE
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleCopyLink}
            className="w-40 flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 py-2 px-4 rounded-lg hover:bg-white/20 transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                コピーしました
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                URLをコピー
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInfoForm;