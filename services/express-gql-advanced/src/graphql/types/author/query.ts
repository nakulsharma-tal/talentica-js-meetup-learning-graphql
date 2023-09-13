import { AUTHORS_SEED_DATA } from "../../../seed/authors.seed";
import { builder } from "../../../graphql/builder";
import { AuthorType } from "./author.type";

/**
 * Query to get all authors
 *
 * query {
 *   allAuthors {
 *     id
 *     name
 *   }
 * }
 */
builder.queryField("allAuthors", (t) =>
  t.field({
    type: [AuthorType],
    nullable: false,
    resolve: () => {
      return AUTHORS_SEED_DATA;
    },
  })
);

/**
 * Query to get author by id
 *
 * query {
 *   author(id: "f47304c4-5e83-4982-bac6-c6fb3e87800e") {
 *     id
 *     name
 *   }
 * }
 */
builder.queryField("author", (t) =>
  t.field({
    type: AuthorType,
    args: {
      id: t.arg({ type: "ID", required: true }),
    },
    nullable: false,
    resolve: (_parent, args) => {
      const author = AUTHORS_SEED_DATA.find((author) => author.id === args.id);
      if (!author) {
        throw new Error("Author not found");
      }

      return author;
    },
  })
);
