import React, { useState } from 'react';
import { Question } from './Question';
import { Results } from './Results';
import { UserInfoForm } from './UserInfoForm';
import ProgressBar from './ProgressBar';
import { questions } from '../data/questions';
import { supabase } from '../lib/supabase';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [userInfo, setUserInfo] = useState<{ age_group: string; gender: string } | null>(null);

  const handleAnswer = async (type: string) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
      if (userInfo) {
        try {
          // Insert quiz response
          const { data: responseData, error: responseError } = await supabase
            .from('quiz_responses')
            .insert([
              {
                age_group: userInfo.age_group,
                gender: userInfo.gender,
              },
            ])
            .select()
            .single();

          if (responseError) throw responseError;

          // Insert quiz answers
          const answersToInsert = newAnswers.map((answer, index) => ({
            response_id: responseData.id,
            question_id: index + 1,
            selected_type: answer,
          }));

          const { error: answersError } = await supabase
            .from('quiz_answers')
            .insert(answersToInsert);

          if (answersError) throw answersError;
        } catch (error) {
          console.error('Error saving quiz results:', error);
        }
      }
    }
  };

  const handleUserInfoSubmit = (info: { age_group: string; gender: string }) => {
    setUserInfo(info);
  };

  if (!userInfo) {
    return <UserInfoForm onSubmit={handleUserInfoSubmit} />;
  }

  if (showResults) {
    return <Results answers={answers} />;
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <ProgressBar currentStep={currentQuestionIndex + 1} totalSteps={questions.length} />
      <Question
        question={questions[currentQuestionIndex]}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;