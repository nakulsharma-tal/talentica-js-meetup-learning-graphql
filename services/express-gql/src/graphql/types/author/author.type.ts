import { GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

// Author Output Type
export const AuthorType = new GraphQLObjectType({
  name: "AuthorType",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
  }),
});
