import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { DateTimeResolver } from "graphql-scalars";
import { articleQuery } from "./types/article/query";
import { articleMutation } from "./types/article/mutation";
import { authorQuery } from "./types/author/query";
import { authorMutation } from "./types/author/mutation";

// Root query
const RootQuery = new GraphQLObjectType({
  name: "Query",
  fields: {
    ...articleQuery,
    ...authorQuery,
  },
});

// Root mutation
const RootMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    ...articleMutation,
    ...authorMutation,
  },
});

// GraphQL schema
export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
  types: [DateTimeResolver],
});
