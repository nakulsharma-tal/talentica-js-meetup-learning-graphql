import { gql } from "@apollo/client";

export const GET_ALL_AUTHORS = gql`
  query GetAllAuthors {
    allAuthors {
      id
      name
    }
  }
`;

export const GET_AUTHOR = gql`
  query Author($id: ID!) {
    author(id: $id) {
      id
      name
    }
  }
`;
