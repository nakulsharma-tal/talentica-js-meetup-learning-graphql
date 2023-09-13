import { ARTICLES_SEED_DATA } from "../../../seed/articles.seed";
import { AUTHORS_SEED_DATA } from "../../../seed/authors.seed";
import { builder } from "../../../graphql/builder";
import { ArticleType } from "./article.type";

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
builder.queryField("allArticles", (t) =>
  t.field({
    type: [ArticleType],
    nullable: false,
    resolve: () => {
      return ARTICLES_SEED_DATA.map((article) => {
        return {
          ...article,
          author: AUTHORS_SEED_DATA.find((author) => author.id === article.authorId),
        };
      });
    },
  })
);

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
builder.queryField("article", (t) =>
  t.field({
    type: ArticleType,
    args: {
      id: t.arg({ type: "ID", required: true }),
    },
    nullable: false,
    resolve: (_parent, args) => {
      const article = ARTICLES_SEED_DATA.find((article) => article.id === args.id);
      if (!article) {
        throw new Error("Article not found");
      }

      return {
        ...article,
        author: AUTHORS_SEED_DATA.find((author) => author.id === article.authorId),
      };
    },
  })
);
