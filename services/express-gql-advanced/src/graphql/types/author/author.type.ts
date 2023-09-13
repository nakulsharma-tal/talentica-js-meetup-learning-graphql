import { builder } from "../../../graphql/builder";
import { IAuthorOutput } from "./author.interface";

// Author Output Type
export const AuthorType = builder.objectRef<IAuthorOutput>("AuthorType").implement({
  fields: (t) => ({
    id: t.field({
      type: "ID",
      resolve: (parent) => parent.id,
    }),
    name: t.string({
      resolve: (parent) => parent.name,
    }),
  }),
});
