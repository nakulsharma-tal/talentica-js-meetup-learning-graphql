import * as express from "express";
import * as cors from "cors";
import type { Request, Response } from "express";
import { graphqlHTTP } from "express-graphql";
import Config from "./config";
import { schema } from "./graphql/schema";

// Create an express server
const app = express();

// Enable CORS
app.use(cors());

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
    schema,
    graphiql: true,
  })
);

// Start the express server
app.listen(Config.PORT, () => {
  console.log(`⚡️[main]: Server is running at http://localhost:${Config.PORT}`);
});
