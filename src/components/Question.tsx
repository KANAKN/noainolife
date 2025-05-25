import React from 'react';
import { Question as QuestionType, Option } from '../types';
import AnswerOption from './AnswerOption';

interface QuestionProps {
  question: QuestionType;
  selectedOption: Option | null;
  onSelectOption: (option: Option) => void;
}

const Question: React.FC<QuestionProps> = ({ question, selectedOption, onSelectOption }) => {
  return (
    <div className="w-full animate-fadeIn">
      <h2 className="text-xl md:text-2xl font-medium text-white mb-6">
        {question.text}
      </h2>
      <div className="space-y-3">
        {question.options.map((option) => (
          <AnswerOption
            key={option.id}
            option={option}
            selected={selectedOption?.id === option.id}
            onSelect={onSelectOption}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;