import { builder } from "../../../graphql/builder";
import { AuthorType } from "../author";
import { IArticleOutput } from "./article.interface";

// Article Output Type
export const ArticleType = builder.objectRef<IArticleOutput>("ArticleType").implement({
  fields: (t) => ({
    id: t.field({
      type: "ID",
      resolve: (parent) => parent.id,
    }),
    createdAt: t.field({
      type: "DateTime",
      resolve: (parent) => new Date(parent.createdAt),
    }),
    author: t.field({
      type: AuthorType,
      resolve: (parent) => parent.author,
    }),
    tags: t.stringList({
      resolve: (parent) => parent.tags,
    }),
    title: t.string({
      resolve: (parent) => parent.title,
    }),
    description: t.string({
      resolve: (parent) => parent.description,
    }),
    urls: t.stringList({
      resolve: (parent) => parent.urls,
    }),
  }),
});
