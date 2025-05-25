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
    <div className="w-[90%] md:w-[60%] mx-auto">
      <div className="text-left mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          性別
        </h2>
        <p className="text-gray-600">
          診断結果の精度向上のため、以下の情報を入力してください。
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="block text-gray-700 text-lg font-medium mb-4">
            性別
          </label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
            required
          >
            <option value="">選択してください</option>
            {genders.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 text-lg font-medium mb-4">
            年齢
          </label>
          <select
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
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
          className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-lg font-bold py-4 px-6 rounded-lg hover:opacity-90 transition-opacity shadow-md"
        >
          診断を始める
        </button>
      </form>
    </div>
  );
};

export default UserInfoForm;