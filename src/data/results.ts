import { Result } from '../types';

export const results: Result[] = [
  {
    type: "リアリスト型",
    title: "AIはツール。うまく使って結果を出す主義",
    description: "効率重視。AIを冷静に分析し、役に立つかどうかを軸に判断するタイプ。",
    aiRelationship: "AIを「便利な社員」としてフル活用。感情は乗せず、機能重視。",
    cautionPoint: "柔軟性に欠けたり、人との関係で冷たく見られることも。",
    recommendations: [
      {
        title: "業務効率化AIツール特集",
        description: "AI自動化ツール導入で作業時間を短縮しよう。最新のAI活用ツールで業務効率を劇的に改善。",
        imageUrl: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
        affiliateLink: "https://example.com/ai-productivity"
      },
      {
        title: "Udemyビジネス入門",
        description: "無料で始めるビジネススキル講座。AI時代に必要なスキルを効率的に習得。",
        imageUrl: "https://images.pexels.com/photos/7063776/pexels-photo-7063776.jpeg",
        affiliateLink: "https://example.com/udemy-business"
      }
    ]
  },
  {
    type: "ロマンチスト型",
    title: "AIには夢と運命を見たい",
    description: "感性で動くタイプ。AIに対しても「相棒」や「占い師」のような存在を求める傾向。",
    aiRelationship: "AIは「心の支え」や「導き手」。ポエティックな視点でAIと接することが多い。",
    cautionPoint: "情報の取捨選択が曖昧になり、フェイクにも影響されやすいことも。",
    recommendations: [
      {
        title: "恋AIナビ",
        description: "相性診断や恋愛占いAIアプリで、あなたの運命の相手を見つけましょう。",
        imageUrl: "https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg",
        affiliateLink: "https://example.com/ai-love-fortune"
      },
      {
        title: "香水定期便COLORIA",
        description: "AIが選ぶ「あなたにぴったりな香水」をお届け。毎月の香りで新しい自分を発見。",
        imageUrl: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg",
        affiliateLink: "https://example.com/coloria-perfume"
      }
    ]
  },
  {
    type: "シンクロニスト型",
    title: "AIと対話することで、自分がもっと見えてくる",
    description: "好奇心旺盛で探究心が強い。AIとの会話を通じて自己発見を楽しむタイプ。",
    aiRelationship: "AIは「壁打ち相手」や「創造のパートナー」。アイデア出しに最適。",
    cautionPoint: "情報過多になりがちで、まとまりを失うことも。",
    recommendations: [
      {
        title: "Notion AI",
        description: "アイデアを形にするAIサービス。思考を整理し、創造性を最大限に引き出します。",
        imageUrl: "https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg",
        affiliateLink: "https://example.com/notion-ai"
      },
      {
        title: "Canva Pro",
        description: "デザイン×AIで自己表現。あなたのクリエイティビティを解放します。",
        imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
        affiliateLink: "https://example.com/canva-pro"
      }
    ]
  },
  {
    type: "エスケーパー型",
    title: "AI社会は息苦しい。でも、逃げ場はちゃんとつくりたい",
    description: "AIや社会の圧に敏感で、慎重かつ回避的。でも自分なりの使い方を模索しているタイプ。",
    aiRelationship: "AIは「監視者」でもあり「距離をとりたい存在」。必要最低限だけ使うスタンス。",
    cautionPoint: "情報に背を向けすぎて、損をしてしまうことも。",
    recommendations: [
      {
        title: "副業スタートブック",
        description: "個人で稼ぐスキルを身につける。AI時代に左右されない、自分らしい働き方を見つけましょう。",
        imageUrl: "https://images.pexels.com/photos/4439425/pexels-photo-4439425.jpeg",
        affiliateLink: "https://example.com/side-business-guide"
      },
      {
        title: "TechAcademy はじめての副業コース",
        description: "Web知識ゼロから学べる。自分のペースでスキルアップを目指せます。",
        imageUrl: "https://images.pexels.com/photos/5240547/pexels-photo-5240547.jpeg",
        affiliateLink: "https://example.com/tech-academy"
      }
    ]
  }
];

export const getResultByType = (typeCounts: { [key: string]: number }): Result => {
  const maxCount = Math.max(...Object.values(typeCounts));
  const dominantType = Object.entries(typeCounts).find(([_, count]) => count === maxCount)?.[0] || "リアリスト型";
  return results.find(result => result.type === dominantType) || results[0];
};