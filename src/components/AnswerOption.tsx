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
      className={`w-full p-4 mb-3 text-left rounded-lg transition-all duration-300 ${
        selected 
          ? 'bg-purple-600 text-white shadow-md transform scale-[1.02]' 
          : 'bg-white text-gray-800 border border-gray-200 hover:border-purple-300 hover:shadow-sm'
      }`}
      onClick={() => onSelect(option)}
    >
      <div className="flex items-center">
        <div className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center ${
          selected ? 'bg-white' : 'border-2 border-gray-300'
        }`}>
          {selected && <div className="w-3 h-3 rounded-full bg-purple-600"></div>}
        </div>
        <span className="text-base md:text-lg">{option.text}</span>
      </div>
    </button>
  );
};

export default AnswerOption;