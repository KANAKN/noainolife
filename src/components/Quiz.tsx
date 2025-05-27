import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Question } from './Question';
import { UserInfoForm } from './UserInfoForm';
import { ProgressBar } from './ProgressBar';
import { questions } from '../data/questions';

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showUserForm, setShowUserForm] = useState(false);

  const handleAnswer = (type: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: type
    }));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowUserForm(true);
    }
  };

  const handleUserInfoSubmit = async (ageGroup: string, gender: string) => {
    try {
      // Insert quiz response
      const { data: responseData, error: responseError } = await supabase
        .from('quiz_responses')
        .insert([{ age_group: ageGroup, gender }])
        .select()
        .single();

      if (responseError) throw responseError;

      // Insert answers
      const answersToInsert = Object.entries(answers).map(([questionId, selectedType]) => ({
        response_id: responseData.id,
        question_id: parseInt(questionId) + 1,
        selected_type: selectedType
      }));

      const { error: answersError } = await supabase
        .from('quiz_answers')
        .insert(answersToInsert);

      if (answersError) throw answersError;

      // Calculate most frequent type
      const types = Object.values(answers);
      const typeCount = types.reduce((acc, type) => {
        acc[type] = (acc[type] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      const dominantType = Object.entries(typeCount).reduce((a, b) => 
        (b[1] > a[1] ? b : a)
      )[0];

      navigate(`/results/${dominantType}`);
    } catch (error) {
      console.error('Error submitting quiz:', error);
      // Handle error appropriately
    }
  };

  if (showUserForm) {
    return <UserInfoForm onSubmit={handleUserInfoSubmit} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <ProgressBar 
          current={currentQuestionIndex + 1} 
          total={questions.length} 
        />
        <Question
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      </div>
    </div>
  );
};

export default Quiz;