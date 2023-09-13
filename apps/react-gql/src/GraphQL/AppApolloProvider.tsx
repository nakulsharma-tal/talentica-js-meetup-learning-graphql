import * as React from "react";
import { ApolloClient, ApolloProvider, createHttpLink } from "@apollo/client";
import Config from "../Config";
import { cache } from "./ApolloCache";

type AppApolloProviderProps = {
  children?: React.ReactNode;
};

export function AppApolloProvider(props: AppApolloProviderProps) {
  const { children } = props;

  const httpLink = createHttpLink({
    uri: `${Config.SERVER_URL}/graphql`,
  });

  const client = new ApolloClient({
    link: httpLink,
    cache,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default AppApolloProvider;
