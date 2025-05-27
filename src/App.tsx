import React from 'react';
import Results from './components/Results';
import { results } from './data/results';

function App() {
  // Get the Romanticist type result for testing
  const romanticistResult = results.find(result => result.type === "ロマンチスト型");
  
  return (
    <div className="min-h-screen bg-[#090034]">
      <Results 
        result={romanticistResult!}
        totalScore={0}
        onRestart={() => {}}
      />
    </div>
  );
}

export default App;