import { GraphQLSchema } from "graphql";

import { builder } from "./builder";
import "./types/index";

// Create stub Query and Mutation roots
builder.queryType({});
builder.mutationType({});

export const schema: GraphQLSchema = builder.toSubGraphSchema({});
