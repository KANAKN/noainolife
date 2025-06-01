import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quiz from './components/Quiz';
import ResultPage from './components/ResultPage';
import Footer from './components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/react'

function App() {
  const [key, setKey] = useState(0);

  const handleRestart = () => {
    setKey(prev => prev + 1);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#090034] flex flex-col">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Quiz key={key} />} />
            <Route path="/result/:type" element={<ResultPage onRestart={handleRestart} />} />
          </Routes>
        </div>
        <Footer />
        <SpeedInsights /> {/* ②ここに追加 */}
      </div>
    </BrowserRouter>
  );
}

export default App;