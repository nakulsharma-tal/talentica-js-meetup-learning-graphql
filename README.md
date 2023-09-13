# Talentica JS Meetup - Learning GraphQL

## Repo structure

- `apps` folder contains all the frontend apps
  - `react-gql` - Readme for this app can be found [here](./apps/react-gql/README.md)
  - This app is a simple ReactJS app created with Vite to demonstrate the use of GraphQL in ReactJS environment.
  - We are using `nest-gql` as the backend service for this app, you can change this from the config file available [here](./apps/react-gql/src/Config.ts). All three services are compatible with this app as they have the same GraphQL schema.
- `services` folder contains all the backend services
  - `express-gql` - Readme for this app can be found [here](./services/express-gql/README.md)
    - Express GraphQL server with queries and mutations to get better understanding of the practical use cases. This service uses schema-first approach.
    - Port: 4013
  - `express-gql-advanced` - Readme for this app can be found [here](./services/express-gql-advanced/README.md)
    - Express GraphQL server with code-first approach using Pothos and Codegen.
    - Port: 4014
  - `express-gql-basic` - Readme for this app can be found [here](./services/express-gql-basic/README.md)
    - Basic Express GraphQL server with a single query to understand the GQL libraries and setup.
    - Port: 4012
  - `nest-gql` - Readme for this app can be found [here](./services/nest-gql/README.md)
    - NestJS GraphQL server to understand how we can use GraphQL in NestJS environment.
    - Port: 4011

## Setting up repo

1. Navigate to the root folder in the terminal
2. Run `rush update` to install all dependencies

## Common Rush commands

1. Run `rush update` to install all dependencies
2. Run `rush purge` to remove all dependencies
3. Run `rush update --purge` to remove and reinstall all dependencies
4. Run `rush build` to build all the packages (only changed packages are built)
5. Run `rush rebuild` to rebuild all the packages (build everything from scratch)
6. Rush documentation can be found [here](https://rushjs.io/pages/intro/welcome/)

## Postman Collection

- Postman collection is available at the repository root folder [here](./Talentica_JS_Meetup-Learning_GraphQL.postman_collection.json).
