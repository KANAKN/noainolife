import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { questions } from '../data/questions';
import { getResultByType } from '../data/results';
import { Option, TypeCount, UserInfo, QuizResponse } from '../types';
import Question from './Question';
import ProgressBar from './ProgressBar';
import Results from './Results';
import UserInfoForm from './UserInfoForm';
import { supabase } from '../lib/supabase';
import { ArrowLeft, Facebook } from 'lucide-react';

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

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      const newSelectedOptions = [...selectedOptions];
      const removedOption = newSelectedOptions[currentQuestionIndex - 1];
      if (removedOption) {
        const newTypeCounts = { ...typeCounts };
        newTypeCounts[removedOption.type] = Math.max(0, (newTypeCounts[removedOption.type] || 0) - 1);
        setTypeCounts(newTypeCounts);
      }
      newSelectedOptions[currentQuestionIndex - 1] = null;
      setSelectedOptions(newSelectedOptions);
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      setUserInfo(null);
      setSelectedOptions([]);
      setTypeCounts({
        'リアリスト型': 0,
        'ロマンチスト型': 0,
        'シンクロニスト型': 0,
        'エスケーパー型': 0
      });
    }
  };

  const saveQuizResponse = async (response: QuizResponse) => {
    try {
      const result = getResultByType(typeCounts);
      
      const { data: quizResponse, error: responseError } = await supabase
        .from('quiz_responses')
        .insert([{
          age_group: response.ageGroup,
          gender: response.gender,
          result_type: result.type
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

  const renderHeader = () => (
    <div className="w-[90%] md:w-[60%] mx-auto mb-12">
      <div>
        <div className="flex justify-center mb-8">
          <img
            src="../women_robot_600.png"
            alt="Human and AI face to face"
            className="w-100 md:w-3/5 object-contain"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          AIは､あなたの友か､敵か､神か？
        </h1>
        <div className="w-full max-w-md mx-auto text-center">
          <p className="text-lg text-white mb-4">
            ー AIとどう向き合うかで、<span className="block sm:inline">あなたの価値観が見えてくる ー</span>
          </p>
        </div>
        <div className="w-full max-w-md mx-auto text-left">
          <p className="text-lg text-white mb-4">
            6つの質問に答えて、あなたのAIタイプを診断します。
          </p>
          <p className="text-base text-white mb-2">
            診断結果では、あなたに合ったヒントやおすすめ〈PR〉も紹介します。
          </p>
          <p className="text-base text-white mb-4">
            診断結果はSNSでシェア！
            <br />
            #NoAINoLife診断 #AIタイプ診断 #生成AI
          </p>
          <div className="flex justify-center gap-3 mt-6">
            <button 
              onClick={shareToFacebook}
              className="py-2 px-4 bg-[#1877F2] text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Facebook className="w-5 h-5" />
              <span>Facebook</span>
            </button>
            <button 
              onClick={shareToX}
              className="py-2 px-4 bg-black text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <span>X</span>
            </button>
            <button 
              onClick={shareToLine}
              className="py-2 px-4 bg-[#00B900] text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <span>LINE</span>
            </button>
          </div>
        </div>
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
          <div className="flex justify-center mt-8">
            <button
              onClick={handleBack}
              className="flex items-center text-white hover:text-white/80 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              戻る
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;