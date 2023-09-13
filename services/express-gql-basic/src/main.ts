import * as express from "express";
import { Express, Request, Response } from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import Config from "./config";

/**
 * GraphQL schema
 *
 * query {
 *   message
 * }
 *
 * query {
 *   greeting(name: "John Doe")
 * }
 *
 * query {
 *   message
 *   greeting(name: "John Doe")
 * }
 */
const schema = buildSchema(`
  type Query {
    message: String
    greeting(name: String!): String
  }
`);

// Root resolver
const root = {
  message: () => "Hello Talenticans!",
  greeting: (args: { name: string }) => `Hello ${args.name}!`,
};

// Create an express server
const app: Express = express();

// Create an endpoint for server health check
app.get("/ping", (req: Request, res: Response) => {
  res.send({
    message: "pong",
  });
});

// Create an endpoint for GraphQL
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

// Start the express server
app.listen(Config.PORT, () => {
  console.log(`⚡️[main]: Server is running at http://localhost:${Config.PORT}`);
});
