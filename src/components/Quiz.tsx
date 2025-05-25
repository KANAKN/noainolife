import React, { useState } from 'react';
import { questions } from '../data/questions';
import { getResultByType } from '../data/results';
import { Option, TypeCount, UserInfo, QuizResponse } from '../types';
import Question from './Question';
import ProgressBar from './ProgressBar';
import Results from './Results';
import UserInfoForm from './UserInfoForm';
import { supabase } from '../lib/supabase';

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [typeCounts, setTypeCounts] = useState<TypeCount>({
    'リアリスト型': 0,
    'ロマンチスト型': 0,
    'シンクロニスト型': 0,
    'エスケーパー型': 0
  });
  const [isComplete, setIsComplete] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const handleUserInfoSubmit = (info: UserInfo) => {
    setUserInfo(info);
  };

  const saveQuizResponse = async (response: QuizResponse) => {
    try {
      const { data: quizResponse, error: responseError } = await supabase
        .from('quiz_responses')
        .insert([{
          age_group: response.ageGroup,
          gender: response.gender
        }])
        .select()
        .single();

      if (responseError) throw responseError;

      const answers = response.answers.map(answer => ({
        response_id: quizResponse.id,
        question_id: answer.questionId,
        selected_type: answer.selectedType
      }));

      const { error: answersError } = await supabase
        .from('quiz_answers')
        .insert(answers);

      if (answersError) throw answersError;
    } catch (error) {
      console.error('Error saving quiz response:', error);
    }
  };

  const handleOptionSelect = async (option: Option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = option;
    setSelectedOptions(newSelectedOptions);

    const newTypeCounts = { ...typeCounts };
    newTypeCounts[option.type] = (newTypeCounts[option.type] || 0) + 1;
    setTypeCounts(newTypeCounts);

    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 500);
    } else {
      if (userInfo) {
        const quizResponse: QuizResponse = {
          ageGroup: userInfo.ageGroup,
          gender: userInfo.gender,
          answers: newSelectedOptions.map((option, index) => ({
            questionId: questions[index].id,
            selectedType: option.type
          }))
        };
        await saveQuizResponse(quizResponse);
      }
      setIsComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptions([]);
    setTypeCounts({
      'リアリスト型': 0,
      'ロマンチスト型': 0,
      'シンクロニスト型': 0,
      'エスケーパー型': 0
    });
    setIsComplete(false);
    setUserInfo(null);
  };

  const renderHeader = () => (
    <div className="w-[90%] md:w-[60%] mx-auto mb-12">
      <div className="flex justify-end mb-4">
        <img 
          src="/no-ai-no-life-logo.png" 
          alt="NO AI, NO LIFE" 
          className="w-24 h-24 object-contain"
        />
      </div>
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          あなたのAI信仰度がわかる「No AI No Life診断」
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-2">
          AIとどう向き合うかで、あなたの価値観が見えてくる。
          6つの質問に答えて、あなたのAI信仰度とタイプを診断。
        </p>
        <p className="text-base text-gray-500 max-w-2xl mx-auto mb-2">
          診断結果では、あなたに合ったヒントやおすすめ（※PR含む）も紹介します。
          気づかなかった「自分らしさ」や「AIとの距離感」がわかるかも。
        </p>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto">
          診断結果はSNSでシェアしよう！
          #NoAINoLife診断 #AIタイプ診断 #生成AI
        </p>
      </div>
    </div>
  );

  if (!userInfo) {
    return (
      <div className="container mx-auto px-4 py-8">
        {renderHeader()}
        <UserInfoForm onSubmit={handleUserInfoSubmit} />
      </div>
    );
  }

  if (isComplete) {
    const result = getResultByType(typeCounts);
    return (
      <div className="container mx-auto px-4 py-8">
        <Results result={result} totalScore={0} onRestart={handleRestart} />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full max-w-2xl mx-auto">
        <ProgressBar 
          currentStep={currentQuestionIndex + 1} 
          totalSteps={questions.length} 
        />
        <div className="mt-8">
          <Question
            question={questions[currentQuestionIndex]}
            selectedOption={selectedOptions[currentQuestionIndex] || null}
            onSelectOption={handleOptionSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default Quiz;