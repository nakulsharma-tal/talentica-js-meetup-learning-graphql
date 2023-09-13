import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ArticleService } from './article.service';
import { ArticleType } from './article.model';
import { CreateArticleInput } from './create-article.model';

@Resolver()
export class ArticleResolver {
  constructor(private articleService: ArticleService) {}

  /**
   * Query to get all articles
   *
   * query {
   *   allArticles {
   *     id
   *     createdAt
   *     author {
   *       id
   *       name
   *     }
   *     tags
   *     title
   *     description
   *     urls
   *   }
   * }
   */
  @Query(() => [ArticleType], { name: 'allArticles' })
  async getAllArticles() {
    return this.articleService.getAllArticles();
  }

  /**
   * Query to get article by id
   *
   * query {
   *   article (id: "1e5cd08d-479e-4a3a-bdd3-4bdddbcaadc3") {
   *     id
   *     createdAt
   *     author {
   *       id
   *       name
   *     }
   *     tags
   *     title
   *     description
   *     urls
   *   }
   * }
   */
  @Query(() => ArticleType, { name: 'article' })
  async getArticleById(@Args('id', { type: () => ID }) id: string) {
    return this.articleService.getArticleById(id);
  }

  /**
   * Mutation to create article
   *
   * mutation {
   *   createArticle(authorId: "f47304c4-5e83-4982-bac6-c6fb3e87800e", tags: ["tag1", "tag2"], title: "test title", description: "test description", urls: ["http://localhost:4013/ping"]) {
   *     id
   *     createdAt
   *     author {
   *       id
   *       name
   *     }
   *     tags
   *     title
   *     description
   *     urls
   *   }
   * }
   */
  @Mutation(() => ArticleType, { name: 'createArticle' })
  async createArticle(
    @Args('input', { type: () => CreateArticleInput })
    input: {
      authorId: string;
      tags: string[];
      title: string;
      description: string;
      urls: string[];
    },
  ) {
    return this.articleService.createArticle(
      input.authorId,
      input.tags,
      input.title,
      input.description,
      input.urls,
    );
  }

  /**
   * Mutation to delete article
   *
   * mutation {
   *   deleteArticle(id: "1e5cd08d-479e-4a3a-bdd3-4bdddbcaadc3") {
   *     id
   *     createdAt
   *     author {
   *       id
   *       name
   *     }
   *     tags
   *     title
   *     description
   *     urls
   *   }
   * }
   */
  @Mutation(() => ArticleType, { name: 'deleteArticle' })
  async deleteArticle(@Args('id', { type: () => ID }) id: string) {
    return this.articleService.deleteArticle(id);
  }
}
