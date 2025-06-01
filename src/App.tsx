import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from './components/Quiz';
import Results from './components/Results';
import Footer from './components/Footer';
import { results } from './data/results';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#090034] flex flex-col">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Quiz />} />
            <Route path="/result/:type" element={
              <Results 
                result={results[0]} 
                totalScore={0} 
                onRestart={() => window.location.href = '/'} 
              />
            } />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;