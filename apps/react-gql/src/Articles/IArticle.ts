export interface IArticle {
  id: string;
  createdAt: string;
  author: IAuthor;
  tags: string[];
  title: string;
  description: string;
  urls: string[];
}

export interface IAuthor {
  id: string;
  name: string;
}
