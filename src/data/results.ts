import { Result } from '../types';

export const results: Result[] = [
  {
    type: "リアリスト型",
    title: "AIはツール。うまく使って結果を出す主義",
    description: "効率重視。AIを冷静に分析し、役に立つかどうかを軸に判断するタイプ。AIを「便利な社員」としてフル活用し、感情は乗せず、機能重視で活用しています。ただし、柔軟性に欠けたり、人との関係で冷たく見られることもあるので注意が必要かもしれません。",
    recommendations: [
      {
        title: "ChatGPT Plus",
        description: "GPT-4搭載で、より高度な業務効率化を実現。ビジネスの現場で即戦力となる最新AIツール。",
        imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
        affiliateLink: "https://example.com/chatgpt-plus"
      },
      {
        title: "AI Business School",
        description: "AIを活用したビジネス戦略を学ぶ。実践的なケーススタディで即戦力のスキルを習得。",
        imageUrl: "https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg",
        affiliateLink: "https://example.com/ai-business-school"
      }
    ]
  },
  {
    type: "ロマンチスト型",
    title: "AIには夢と運命を見たい",
    description: "感性で動くタイプ。AIに対しても「相棒」や「占い師」のような存在を求める傾向があります。AIを「心の支え」や「導き手」として捉え、ポエティックな視点でAIと接することが多いのが特徴です。ただし、情報の取捨選択が曖昧になり、フェイクにも影響されやすいことがあるので注意が必要です。",
    recommendations: [
      {
        title: "AI占い師 Luna",
        description: "AIが導く、あなただけの運命の道。毎日の運勢からライフプランまで、パーソナライズされた占いを提供。",
        imageUrl: "https://images.pexels.com/photos/2117938/pexels-photo-2117938.jpeg",
        affiliateLink: "https://example.com/ai-fortune-luna"
      },
      {
        title: "AIジャーナリング",
        description: "AIと一緒に書く日記で自己発見。感情分析で心の変化を可視化し、より良い未来へ導きます。",
        imageUrl: "https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg",
        affiliateLink: "https://example.com/ai-journaling"
      }
    ]
  },
  {
    type: "シンクロニスト型",
    title: "AIと対話することで、自分がもっと見えてくる",
    description: "好奇心旺盛で探究心が強い。AIとの会話を通じて自己発見を楽しむタイプです。AIを「壁打ち相手」や「創造のパートナー」として活用し、アイデア出しに最適な存在として捉えています。ただし、情報過多になりがちで、まとまりを失うことがあるので注意が必要です。",
    recommendations: [
      {
        title: "AI Art Studio Pro",
        description: "AIと共創する新しいアート体験。あなたのインスピレーションを形にする、次世代のクリエイティブツール。",
        imageUrl: "https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg",
        affiliateLink: "https://example.com/ai-art-studio"
      },
      {
        title: "Mind AI Companion",
        description: "24時間対話可能なAIパートナー。創造性を刺激し、新しいアイデアを共に育てます。",
        imageUrl: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
        affiliateLink: "https://example.com/mind-ai-companion"
      }
    ]
  },
  {
    type: "エスケーパー型",
    title: "AI社会は息苦しい。でも、逃げ場はちゃんとつくりたい",
    description: "AIや社会の圧に敏感で、慎重かつ回避的。でも自分なりの使い方を模索しているタイプです。AIを「監視者」でもあり「距離をとりたい存在」として捉え、必要最低限だけ使うスタンスを取っています。ただし、情報に背を向けすぎて、損をしてしまうことがあるので注意が必要です。",
    recommendations: [
      {
        title: "Digital Detox Guide",
        description: "AIと適度な距離を保ちながら、デジタルライフを快適に。メンタルヘルスを重視した新しいライフスタイルを提案。",
        imageUrl: "https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg",
        affiliateLink: "https://example.com/digital-detox"
      },
      {
        title: "プライバシーファースト",
        description: "あなたのデジタルプライバシーを守る完全ガイド。AI時代を自分らしく生きるためのノウハウを解説。",
        imageUrl: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
        affiliateLink: "https://example.com/privacy-first"
      }
    ]
  }
];

export const getResultByType = (typeCounts: { [key: string]: number }): Result => {
  const maxCount = Math.max(...Object.values(typeCounts));
  const dominantType = Object.entries(typeCounts).find(([_, count]) => count === maxCount)?.[0] || "リアリスト型";
  return results.find(result => result.type === dominantType) || results[0];
};