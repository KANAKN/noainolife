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
            html: '<iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fchat.openai.com%2F" title="ChatGPT" class="w-full aspect-video rounded-lg" frameborder="0" scrolling="no"></iframe>'
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
            html: '<iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fchat.openai.com%2F" title="ChatGPT" class="w-full aspect-video rounded-lg" frameborder="0" scrolling="no"></iframe>'
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
            html: '<iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fchat.openai.com%2F" title="ChatGPT" class="w-full aspect-video rounded-lg" frameborder="0" scrolling="no"></iframe>'
          },
          {
            html: '<iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fbard.google.com%2F" title="Bard" class="w-full aspect-video rounded-lg" frameborder="0" scrolling="no"></iframe>'
          },
          {
            html: '<iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fwww.midjourney.com%2F" title="Midjourney" class="w-full aspect-video rounded-lg" frameborder="0" scrolling="no"></iframe>'
          },
          {
            html: '<iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fwww.notion.so%2F" title="Notion AI" class="w-full aspect-video rounded-lg" frameborder="0" scrolling="no"></iframe>'
          }
        ]
      },
      {
        subtitle: "おすすめの書籍",
        items: [
          {
            html: '<iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fbook.impress.co.jp%2Fbooks%2F1122101021" title="ChatGPTによるプロンプトエンジニアリング実践ガイド" class="w-full aspect-video rounded-lg" frameborder="0" scrolling="no"></iframe>'
          },
          {
            html: '<iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fbook.impress.co.jp%2Fbooks%2F1121101057" title="ChatGPT 1冊目の教科書" class="w-full aspect-video rounded-lg" frameborder="0" scrolling="no"></iframe>'
          },
          {
            html: '<iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fbook.impress.co.jp%2Fbooks%2F1120101048" title="ChatGPTビジネス活用の教科書" class="w-full aspect-video rounded-lg" frameborder="0" scrolling="no"></iframe>'
          },
          {
            html: '<iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fbook.impress.co.jp%2Fbooks%2F1122101049" title="ChatGPTプロンプト実践入門" class="w-full aspect-video rounded-lg" frameborder="0" scrolling="no"></iframe>'
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
            html: '<iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fchat.openai.com%2F" title="ChatGPT" class="w-full aspect-video rounded-lg" frameborder="0" scrolling="no"></iframe>'
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