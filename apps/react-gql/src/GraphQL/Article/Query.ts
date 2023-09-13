import { gql } from "@apollo/client";

export const GET_ALL_ARTICLES = gql`
  query GetAllArticles {
    allArticles {
      id
      createdAt
      author {
        id
        name
      }
      tags
      title
      description
      urls
    }
  }
`;

export const GET_ARTICLE = gql`
  query Article($id: ID!) {
    article(id: $id) {
      id
      createdAt
      author {
        id
        name
      }
      tags
      title
      description
      urls
    }
  }
`;
