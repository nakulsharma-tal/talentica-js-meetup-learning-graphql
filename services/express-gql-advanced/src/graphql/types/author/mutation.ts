import { v4 as uuidV4 } from "uuid";
import { AUTHORS_SEED_DATA } from "../../../seed/authors.seed";
import { builder } from "../../../graphql/builder";
import { AuthorType } from "./author.type";
import { IAuthor } from "./author.interface";

/**
 * Mutation to create author
 *
 * mutation {
 *   createAuthor(name: "John Doe") {
 *     id
 *     name
 *   }
 * }
 */
builder.mutationField("createAuthor", (t) =>
  t.field({
    type: AuthorType,
    nullable: false,
    args: {
      name: t.arg.string({ required: true }),
    },
    resolve: async (_parent, args) => {
      const newAuthor: IAuthor = {
        id: uuidV4(),
        name: args.name,
      };

      AUTHORS_SEED_DATA.push(newAuthor);

      return newAuthor;
    },
  })
);
