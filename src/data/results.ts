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
        subtitle: "おすすめのAIツール",
        items: [
          {
            html: '<iframe src="https://ads-partners.coupang.com/widgets.html?id=695042&template=carousel&trackingCode=AF1234567&subId=&width=200&height=200" width="200" height="200" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></iframe>'
          },
          {
            html: '<iframe src="https://ads-partners.coupang.com/widgets.html?id=695042&template=carousel&trackingCode=AF1234567&subId=&width=200&height=200" width="200" height="200" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></iframe>'
          }
        ]
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
        subtitle: "おすすめのAIツール",
        items: [
          {
            html: '<iframe src="https://ads-partners.coupang.com/widgets.html?id=695042&template=carousel&trackingCode=AF1234567&subId=&width=200&height=200" width="200" height="200" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></iframe>'
          },
          {
            html: '<iframe src="https://ads-partners.coupang.com/widgets.html?id=695042&template=carousel&trackingCode=AF1234567&subId=&width=200&height=200" width="200" height="200" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></iframe>'
          }
        ]
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
        subtitle: "おすすめのAIツール",
        items: [
          {
            html: '<iframe src="https://ads-partners.coupang.com/widgets.html?id=695042&template=carousel&trackingCode=AF1234567&subId=&width=200&height=200" width="200" height="200" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></iframe>'
          },
          {
            html: '<iframe src="https://ads-partners.coupang.com/widgets.html?id=695042&template=carousel&trackingCode=AF1234567&subId=&width=200&height=200" width="200" height="200" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></iframe>'
          }
        ]
      },
      {
        subtitle: "おすすめの本",
        items: [
          {
            html: '<iframe src="https://ads-partners.coupang.com/widgets.html?id=695042&template=carousel&trackingCode=AF1234567&subId=&width=200&height=200" width="200" height="200" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></iframe>'
          },
          {
            html: '<iframe src="https://ads-partners.coupang.com/widgets.html?id=695042&template=carousel&trackingCode=AF1234567&subId=&width=200&height=200" width="200" height="200" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></iframe>'
          }
        ]
      },
      {
        subtitle: "おすすめのガジェット",
        items: [
          {
            html: '<iframe src="https://ads-partners.coupang.com/widgets.html?id=695042&template=carousel&trackingCode=AF1234567&subId=&width=200&height=200" width="200" height="200" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></iframe>'
          },
          {
            html: '<iframe src="https://ads-partners.coupang.com/widgets.html?id=695042&template=carousel&trackingCode=AF1234567&subId=&width=200&height=200" width="200" height="200" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></iframe>'
          }
        ]
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
        subtitle: "おすすめのAIツール",
        items: [
          {
            html: '<iframe src="https://ads-partners.coupang.com/widgets.html?id=695042&template=carousel&trackingCode=AF1234567&subId=&width=200&height=200" width="200" height="200" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></iframe>'
          },
          {
            html: '<iframe src="https://ads-partners.coupang.com/widgets.html?id=695042&template=carousel&trackingCode=AF1234567&subId=&width=200&height=200" width="200" height="200" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></iframe>'
          }
        ]
      }
    ]
  }
];

export const getResultByType = (typeCounts: { [key: string]: number }): Result => {
  const maxCount = Math.max(...Object.values(typeCounts));
  const dominantType = Object.entries(typeCounts).find(([_, count]) => count === maxCount)?.[0] || "リアリスト型";
  return results.find(result => result.type === dominantType) || results[0];
};