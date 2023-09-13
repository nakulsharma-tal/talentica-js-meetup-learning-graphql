import { InMemoryCache } from "@apollo/client";
import { StrictTypedTypePolicies } from "./Generated/ApolloHelpers";
import { offsetLimitPagination } from "@apollo/client/utilities";

const typePolicies: StrictTypedTypePolicies = {
  Query: {
    fields: {
      allArticles: offsetLimitPagination(),
      allAuthors: offsetLimitPagination(),
    },
  },
};

export const cache = new InMemoryCache({
  typePolicies,
});
