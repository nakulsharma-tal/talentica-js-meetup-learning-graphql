export interface IArticle {
  id: string;
  createdAt: string;
  authorId: string;
  tags: string[];
  title: string;
  description: string;
  urls: string[];
}
