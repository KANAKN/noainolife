import React, { useState } from 'react';
import { UserInfo } from '../types';
import { Copy, Check } from 'lucide-react';

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
          className="w-full bg-gradient-to-r from-[#af24d6] to-[#9d1939] text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity mb-4"
        >
          診断を始める
        </button>

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