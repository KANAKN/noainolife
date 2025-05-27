import React from 'react';
import Quiz from './components/Quiz';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#090034] flex flex-col">
      <div className="flex-grow">
        <Quiz />
      </div>
      <Footer />
    </div>
  );
}

export default App;