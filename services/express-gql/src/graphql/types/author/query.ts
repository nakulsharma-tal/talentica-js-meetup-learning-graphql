import { GraphQLID, GraphQLList, GraphQLNonNull } from "graphql";
import { AUTHORS_SEED_DATA } from "../../../seed/authors.seed";
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
const allAuthors = {
  name: "allAuthors",
  type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(AuthorType))),
  resolve: () => {
    return AUTHORS_SEED_DATA;
  },
};

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
const author = {
  name: "author",
  type: new GraphQLNonNull(AuthorType),
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (parent, args) => {
    const author = AUTHORS_SEED_DATA.find((author) => author.id === args.id);
    if (!author) {
      throw new Error("Author not found");
    }

    return author;
  },
};

// GraphQL queries for author
export const authorQuery = {
  allAuthors,
  author,
};
