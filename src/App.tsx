import React from 'react';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Quiz />
      </div>
    </div>
  );
}

export default App;