import { gql } from "@apollo/client";

export const CREATE_ARTICLE = gql`
  mutation CreateArticle($input: CreateArticleInput!) {
    createArticle(input: $input) {
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

export const DELETE_ARTICLE = gql`
  mutation DeleteArticle($id: ID!) {
    deleteArticle(id: $id) {
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
