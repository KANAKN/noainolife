import React from 'react';
import { Option } from '../types';

interface AnswerOptionProps {
  option: Option;
  selected: boolean;
  onSelect: (option: Option) => void;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({ option, selected, onSelect }) => {
  return (
    <button
      className={`w-full p-5 mb-4 text-left rounded-xl transition-all duration-300 ${
        selected 
          ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg transform scale-[1.02]' 
          : 'bg-white text-gray-800 border border-gray-200 hover:border-purple-300 hover:shadow-md hover:-translate-y-1'
      }`}
      onClick={() => onSelect(option)}
    >
      <div className="flex items-center">
        <div className={`w-6 h-6 rounded-full mr-4 flex items-center justify-center border-2 ${
          selected ? 'border-white bg-white' : 'border-gray-300 bg-transparent'
        }`}>
          {selected && <div className="w-3 h-3 rounded-full bg-purple-600"></div>}
        </div>
        <span className="text-lg font-medium">{option.text}</span>
      </div>
    </button>
  );
};

export default AnswerOption;