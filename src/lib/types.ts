export interface Article {
  slug: string;
  title: string;
  date: string;
  content: string;
  excerpt?: string;
  readingTime: number;
  tags?: string[];
}

export interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  readingTime: number;
  tags?: string[];
}
