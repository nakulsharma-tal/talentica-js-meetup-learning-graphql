import { IAuthorOutput } from "../author";

export interface IArticle {
  id: string;
  createdAt: string;
  authorId: string;
  tags: string[];
  title: string;
  description: string;
  urls: string[];
}

export interface IArticleOutput {
  id: string;
  createdAt: string;
  author: IAuthorOutput;
  tags: string[];
  title: string;
  description: string;
  urls: string[];
}
