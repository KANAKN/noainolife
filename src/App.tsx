import React from 'react';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <img 
              src="/no-ai-no-life-logo.png" 
              alt="NO AI, NO LIFE" 
              className="w-24 h-24"
            />
          </div>
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
            診断結果はSNSでシェア！
            #NoAINoLife診断 #AIタイプ診断 #生成AI
          </p>
        </div>
        <Quiz />
      </div>
    </div>
  );
}

export default App;