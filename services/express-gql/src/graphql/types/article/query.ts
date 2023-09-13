import { GraphQLID, GraphQLList, GraphQLNonNull } from "graphql";
import { ARTICLES_SEED_DATA } from "../../../seed/articles.seed";
import { AUTHORS_SEED_DATA } from "../../../seed/authors.seed";
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
const allArticles = {
  name: "allArticles",
  type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ArticleType))),
  resolve: () => {
    return ARTICLES_SEED_DATA.map((article) => {
      return {
        ...article,
        createdAt: new Date(article.createdAt),
        author: AUTHORS_SEED_DATA.find((author) => author.id === article.authorId),
      };
    });
  },
};

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
const article = {
  name: "article",
  type: new GraphQLNonNull(ArticleType),
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (parent, args) => {
    const article = ARTICLES_SEED_DATA.find((article) => article.id === args.id);
    if (!article) {
      throw new Error("Article not found");
    }

    return {
      ...article,
      createdAt: new Date(article.createdAt),
      author: AUTHORS_SEED_DATA.find((author) => author.id === article.authorId),
    };
  },
};

// GraphQL queries for article
export const articleQuery = {
  allArticles,
  article,
};
