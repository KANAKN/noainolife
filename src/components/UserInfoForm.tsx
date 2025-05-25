import React from 'react';
import { UserInfo } from '../types';

interface UserInfoFormProps {
  onSubmit: (userInfo: UserInfo) => void;
}

const UserInfoForm: React.FC<UserInfoFormProps> = ({ onSubmit }) => {
  const [ageGroup, setAgeGroup] = React.useState('');
  const [gender, setGender] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ageGroup && gender) {
      onSubmit({ ageGroup, gender });
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
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg">
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          性別
        </label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent bg-gray-50 hover:bg-gray-100 transition-colors text-gray-700"
          required
        >
          <option value="">選択してください</option>
          {genders.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
      </div>

      <div className="mb-8">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          年齢
        </label>
        <select
          value={ageGroup}
          onChange={(e) => setAgeGroup(e.target.value)}
          className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent bg-gray-50 hover:bg-gray-100 transition-colors text-gray-700"
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
        className="w-full py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white text-lg font-bold rounded-xl hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
        disabled={!gender || !ageGroup}
      >
        診断を始める
      </button>
    </form>
  );
};

export default UserInfoForm;