import { GraphQLNonNull, GraphQLString } from "graphql";
import { v4 as uuidV4 } from "uuid";
import { AUTHORS_SEED_DATA } from "../../../seed/authors.seed";
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
const createAuthor = {
  name: "createAuthor",
  type: new GraphQLNonNull(AuthorType),
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: (parent, args) => {
    const newAuthor: IAuthor = {
      id: uuidV4(),
      name: args.name,
    };

    AUTHORS_SEED_DATA.push(newAuthor);

    return newAuthor;
  },
};

// GraphQL mutations for author
export const authorMutation = {
  createAuthor,
};
