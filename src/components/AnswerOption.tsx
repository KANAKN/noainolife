import React from 'react';
import { Option } from '../types';

interface AnswerOptionProps {
  option: Option;
  selected: boolean;
  onSelect: (option: Option) => void;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({ option, selected, onSelect }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'リアリスト型':
        return '#004aad';
      case 'ロマンチスト型':
        return '#df71da';
      case 'シンクロニスト型':
        return '#8fff00';
      case 'エスケーパー型':
        return '#9d1939';
      default:
        return '#004aad';
    }
  };

  const backgroundColor = getTypeColor(option.type);

  return (
    <button
      className={`w-full p-4 mb-3 text-left rounded-lg transition-all duration-300 ${
        selected 
          ? 'text-white shadow-md transform scale-[1.02]' 
          : 'bg-white/10 text-white border border-white/20 hover:border-white/40 hover:shadow-sm'
      }`}
      style={{
        backgroundColor: selected ? backgroundColor : undefined
      }}
      onClick={() => onSelect(option)}
    >
      <div className="flex items-center">
        <div className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center ${
          selected ? 'bg-white' : 'border-2 border-white/50'
        }`}>
          {selected && (
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor }}
            ></div>
          )}
        </div>
        <span className="text-base md:text-lg">{option.text}</span>
      </div>
    </button>
  );
};

export default AnswerOption;