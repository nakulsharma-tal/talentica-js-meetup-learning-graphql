import { GraphQLID, GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import { v4 as uuidV4 } from "uuid";
import * as moment from "moment";
import { ARTICLES_SEED_DATA } from "../../../seed/articles.seed";
import { AUTHORS_SEED_DATA } from "../../../seed/authors.seed";
import { ArticleType } from "./article.type";
import { IArticle } from "./article.interface";

/**
 * Input variable definition for creating an article.
 */
export const CreateArticleInput = new GraphQLInputObjectType({
  name: "CreateArticleInput",
  fields: () => ({
    authorId: { type: new GraphQLNonNull(GraphQLID) },
    tags: { type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GraphQLString))) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    urls: { type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GraphQLString))) },
  }),
});

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
const createArticle = {
  name: "createArticle",
  type: new GraphQLNonNull(ArticleType),
  args: {
    input: { type: new GraphQLNonNull(CreateArticleInput) },
  },
  resolve: (parent, args) => {
    const author = AUTHORS_SEED_DATA.find((author) => author.id === args.authorId);
    if (!author) {
      throw new Error("Author not found");
    }

    const newArticle: IArticle = {
      id: uuidV4(),
      createdAt: moment().format("YYYY/MM/DD"),
      authorId: args.authorId,
      tags: args.tags,
      title: args.title,
      description: args.description,
      urls: args.urls,
    };

    ARTICLES_SEED_DATA.push(newArticle);

    return {
      ...newArticle,
      createdAt: new Date(newArticle.createdAt),
      author,
    };
  },
};

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
const deleteArticle = {
  name: "deleteArticle",
  type: new GraphQLNonNull(ArticleType),
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (parent, args) => {
    const articleIndex = ARTICLES_SEED_DATA.findIndex((article) => article.id === args.id);
    if (articleIndex < 0) {
      throw new Error("Article not found");
    }

    const deletedArticles = ARTICLES_SEED_DATA.splice(articleIndex, 1);
    return {
      ...deletedArticles[0],
      createdAt: new Date(deletedArticles[0].createdAt),
      author: AUTHORS_SEED_DATA.find((author) => author.id === deletedArticles[0].authorId),
    };
  },
};

// GraphQL mutations for article
export const articleMutation = {
  createArticle,
  deleteArticle,
};
