export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  type: 'リアリスト型' | 'ロマンチスト型' | 'シンクロニスト型' | 'エスケーパー型';
}

export interface CompatibilityEntry {
  type: string;
  stars: 3 | 2 | null; // 3=★★★, 2=★★, null=？
  description?: string;
}

export interface Result {
  type: string;
  description: string;
  description2: string;
  aiRelationship: string;
  cautionPoint: string;
  compatibility: CompatibilityEntry[];
  recommendations: RecommendationCategory[];
}

export interface RecommendationCategory {
  subtitle: string;
  items: Recommendation[];
}

export interface Recommendation {
  title?: string;
  description?: string;
  imageUrl?: string;
  affiliateLink?: string;
  price?: string;
  priceDate?: string;
  html?: string;
}

export interface TypeCount {
  [key: string]: number;
}

export interface UserInfo {
  ageGroup: string;
  gender: string;
}

export interface QuizResponse {
  id?: string;
  ageGroup: string;
  gender: string;
  answers: {
    questionId: number;
    selectedType: string;
  }[];
}