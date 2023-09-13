import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuidV4 } from 'uuid';
import * as moment from 'moment';
import { AUTHORS_SEED_DATA } from '../author/authors.seed';
import { ARTICLES_SEED_DATA } from './articles.seed';
import { IArticle } from './article.interface';

@Injectable()
export class ArticleService {
  public async getAllArticles() {
    return ARTICLES_SEED_DATA.map((article) => {
      return {
        ...article,
        createdAt: new Date(article.createdAt),
        author: AUTHORS_SEED_DATA.find(
          (author) => author.id === article.authorId,
        ),
      };
    });
  }

  public async getArticleById(id: string) {
    const article = ARTICLES_SEED_DATA.find((article) => article.id === id);
    if (!article) {
      throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
    }

    return {
      ...article,
      createdAt: new Date(article.createdAt),
      author: AUTHORS_SEED_DATA.find(
        (author) => author.id === article.authorId,
      ),
    };
  }

  public async createArticle(
    authorId: string,
    tags: string[],
    title: string,
    description: string,
    urls: string[],
  ) {
    const author = AUTHORS_SEED_DATA.find((author) => author.id === authorId);
    if (!author) {
      throw new HttpException('Author not found', HttpStatus.NOT_FOUND);
    }

    const newArticle: IArticle = {
      id: uuidV4(),
      createdAt: moment().format('YYYY/MM/DD'),
      authorId: authorId,
      tags,
      title,
      description,
      urls,
    };

    ARTICLES_SEED_DATA.push(newArticle);

    return {
      ...newArticle,
      createdAt: new Date(newArticle.createdAt),
      author,
    };
  }

  public async deleteArticle(id: string) {
    const articleIndex = ARTICLES_SEED_DATA.findIndex(
      (article) => article.id === id,
    );
    if (articleIndex < 0) {
      throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
    }

    const deletedArticles = ARTICLES_SEED_DATA.splice(articleIndex, 1);
    return {
      ...deletedArticles[0],
      createdAt: new Date(deletedArticles[0].createdAt),
      author: AUTHORS_SEED_DATA.find(
        (author) => author.id === deletedArticles[0].authorId,
      ),
    };
  }
}
