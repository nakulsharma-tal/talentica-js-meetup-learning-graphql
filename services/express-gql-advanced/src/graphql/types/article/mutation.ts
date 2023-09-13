import { v4 as uuidV4 } from "uuid";
import * as moment from "moment";
import { ARTICLES_SEED_DATA } from "../../../seed/articles.seed";
import { AUTHORS_SEED_DATA } from "../../../seed/authors.seed";
import { builder } from "../../../graphql/builder";
import { ArticleType } from "./article.type";
import { IArticle } from "./article.interface";

/**
 * Input variable definition for creating an article.
 */
const CreateArticleInput = builder.inputType("CreateArticleInput", {
  fields: (t) => ({
    authorId: t.field({ type: "ID", required: true }),
    tags: t.stringList({ required: true }),
    title: t.string({ required: true }),
    description: t.string({ required: true }),
    urls: t.stringList({ required: true }),
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
builder.mutationField("createArticle", (t) =>
  t.field({
    type: ArticleType,
    nullable: false,
    args: {
      input: t.arg({ type: CreateArticleInput, required: true }),
    },
    resolve: async (_parent, args) => {
      const author = AUTHORS_SEED_DATA.find((author) => author.id === args.input.authorId);
      if (!author) {
        throw new Error("Author not found");
      }

      const newArticle: IArticle = {
        id: uuidV4(),
        createdAt: moment().format("YYYY/MM/DD"),
        authorId: args.input.authorId,
        tags: args.input.tags,
        title: args.input.title,
        description: args.input.description,
        urls: args.input.urls,
      };

      ARTICLES_SEED_DATA.push(newArticle);

      return {
        ...newArticle,
        author,
      };
    },
  })
);

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
builder.mutationField("deleteArticle", (t) =>
  t.field({
    type: ArticleType,
    nullable: false,
    args: {
      id: t.arg({ type: "ID", required: true }),
    },
    resolve: async (_parent, args) => {
      const articleIndex = ARTICLES_SEED_DATA.findIndex((article) => article.id === args.id);
      if (articleIndex < 0) {
        throw new Error("Article not found");
      }

      const deletedArticles = ARTICLES_SEED_DATA.splice(articleIndex, 1);
      return {
        ...deletedArticles[0],
        author: AUTHORS_SEED_DATA.find((author) => author.id === deletedArticles[0].authorId),
      };
    },
  })
);
