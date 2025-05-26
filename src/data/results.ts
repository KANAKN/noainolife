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
        title: "【先着2000円OFFクーポン　お買い物マラソン】ノートン norton ノートン 360 スタンダード 1台 3年版 ダウンロード アンチウイルス iOS windows mac norton セキュリティソフト 送料無料 ノートン360 セキュリティ スマホ iphone ipad パソコン",
        description: "AIを活用した高度なセキュリティ保護。1台3年版でマルチデバイスに対応。効率的なセキュリティ管理を実現。",
        imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/norton/cabinet/08738151/08785216/n360_standard_1-3.jpg",
        affiliateLink: "https://hb.afl.rakuten.co.jp/ichiba/48795f20.780e5362.48795f21.e45e322a/_RTLink110199?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fnorton%2F21447537%2F",
        price: "11,980円（税込、送料無料)",
        priceDate: "2025/5/26"
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
        title: ,
        description: "AIが24時間365日見守る安心のセキュリティ。大切な思い出と個人情報を守り、安全なオンライン体験を。",
        imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/norton/cabinet/08738151/08785216/n360_standard_1-3.jpg",
        affiliateLink: "https://hb.afl.rakuten.co.jp/ichiba/48795f20.780e5362.48795f21.e45e322a/_RTLink110199?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fnorton%2F21447537%2F",
        price: "11,980円（税込、送料無料)",
        priceDate: "2025/5/26"
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
        title: "【先着2000円OFFクーポン　お買い物マラソン】ノートン norton ノートン 360 スタンダード 1台 3年版 ダウンロード アンチウイルス iOS windows mac norton セキュリティソフト 送料無料 ノートン360 セキュリティ スマホ iphone ipad パソコン",
        description: "最新AI技術で進化し続けるセキュリティ。新しい発見と創造的な活動を安全に楽しめる環境を提供。",
        imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/norton/cabinet/08738151/08785216/n360_standard_1-3.jpg",
        affiliateLink: "https://hb.afl.rakuten.co.jp/ichiba/48795f20.780e5362.48795f21.e45e322a/_RTLink110199?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fnorton%2F21447537%2F",
        price: "11,980円（税込、送料無料)",
        priceDate: "2025/5/26"
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
        title: "【先着2000円OFFクーポン　お買い物マラソン】ノートン norton ノートン 360 スタンダード 1台 3年版 ダウンロード アンチウイルス iOS windows mac norton セキュリティソフト 送料無料 ノートン360 セキュリティ スマホ iphone ipad パソコン",
        description: "プライバシーを重視した安全設計。必要最小限のAI活用で、静かに、でもしっかりとデバイスを保護。",
        imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/norton/cabinet/08738151/08785216/n360_standard_1-3.jpg",
        affiliateLink: "https://hb.afl.rakuten.co.jp/ichiba/48795f20.780e5362.48795f21.e45e322a/_RTLink110199?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fnorton%2F21447537%2F",
        price: "11,980円（税込、送料無料)",
        priceDate: "2025/5/26"
      }
    ]
  }
];

export const getResultByType = (typeCounts: { [key: string]: number }): Result => {
  const maxCount = Math.max(...Object.values(typeCounts));
  const dominantType = Object.entries(typeCounts).find(([_, count]) => count === maxCount)?.[0] || "リアリスト型";
  return results.find(result => result.type === dominantType) || results[0];
};