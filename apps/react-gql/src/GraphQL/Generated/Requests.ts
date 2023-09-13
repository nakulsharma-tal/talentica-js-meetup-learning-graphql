import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/esm/types.js';
import { gql } from 'graphql-request';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type IArticleType = {
  __typename?: 'ArticleType';
  author: IAuthorType;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  tags: Array<Scalars['String']>;
  title: Scalars['String'];
  urls: Array<Scalars['String']>;
};

export type IAuthorType = {
  __typename?: 'AuthorType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ICreateArticleInput = {
  authorId: Scalars['ID'];
  description: Scalars['String'];
  tags: Array<Scalars['String']>;
  title: Scalars['String'];
  urls: Array<Scalars['String']>;
};

export type IMutation = {
  __typename?: 'Mutation';
  createArticle: IArticleType;
  createAuthor: IAuthorType;
  deleteArticle: IArticleType;
};


export type IMutationCreateArticleArgs = {
  input: ICreateArticleInput;
};


export type IMutationCreateAuthorArgs = {
  name: Scalars['String'];
};


export type IMutationDeleteArticleArgs = {
  id: Scalars['ID'];
};

export type IQuery = {
  __typename?: 'Query';
  allArticles: Array<IArticleType>;
  allAuthors: Array<IAuthorType>;
  article: IArticleType;
  author: IAuthorType;
};


export type IQueryArticleArgs = {
  id: Scalars['ID'];
};


export type IQueryAuthorArgs = {
  id: Scalars['ID'];
};

export type ICreateArticleMutationVariables = Exact<{
  input: ICreateArticleInput;
}>;


export type ICreateArticleMutation = { __typename?: 'Mutation', createArticle: { __typename?: 'ArticleType', id: string, createdAt: any, tags: Array<string>, title: string, description: string, urls: Array<string>, author: { __typename?: 'AuthorType', id: string, name: string } } };

export type IDeleteArticleMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type IDeleteArticleMutation = { __typename?: 'Mutation', deleteArticle: { __typename?: 'ArticleType', id: string, createdAt: any, tags: Array<string>, title: string, description: string, urls: Array<string>, author: { __typename?: 'AuthorType', id: string, name: string } } };

export type IGetAllArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type IGetAllArticlesQuery = { __typename?: 'Query', allArticles: Array<{ __typename?: 'ArticleType', id: string, createdAt: any, tags: Array<string>, title: string, description: string, urls: Array<string>, author: { __typename?: 'AuthorType', id: string, name: string } }> };

export type IArticleQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type IArticleQuery = { __typename?: 'Query', article: { __typename?: 'ArticleType', id: string, createdAt: any, tags: Array<string>, title: string, description: string, urls: Array<string>, author: { __typename?: 'AuthorType', id: string, name: string } } };

export type ICreateAuthorMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type ICreateAuthorMutation = { __typename?: 'Mutation', createAuthor: { __typename?: 'AuthorType', id: string, name: string } };

export type IGetAllAuthorsQueryVariables = Exact<{ [key: string]: never; }>;


export type IGetAllAuthorsQuery = { __typename?: 'Query', allAuthors: Array<{ __typename?: 'AuthorType', id: string, name: string }> };

export type IAuthorQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type IAuthorQuery = { __typename?: 'Query', author: { __typename?: 'AuthorType', id: string, name: string } };


export const CreateArticleDocument = gql`
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
export const DeleteArticleDocument = gql`
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
export const GetAllArticlesDocument = gql`
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
export const ArticleDocument = gql`
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
export const CreateAuthorDocument = gql`
    mutation CreateAuthor($name: String!) {
  createAuthor(name: $name) {
    id
    name
  }
}
    `;
export const GetAllAuthorsDocument = gql`
    query GetAllAuthors {
  allAuthors {
    id
    name
  }
}
    `;
export const AuthorDocument = gql`
    query Author($id: ID!) {
  author(id: $id) {
    id
    name
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CreateArticle(variables: ICreateArticleMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICreateArticleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICreateArticleMutation>(CreateArticleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateArticle', 'mutation');
    },
    DeleteArticle(variables: IDeleteArticleMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IDeleteArticleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<IDeleteArticleMutation>(DeleteArticleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteArticle', 'mutation');
    },
    GetAllArticles(variables?: IGetAllArticlesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IGetAllArticlesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IGetAllArticlesQuery>(GetAllArticlesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllArticles', 'query');
    },
    Article(variables: IArticleQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IArticleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IArticleQuery>(ArticleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Article', 'query');
    },
    CreateAuthor(variables: ICreateAuthorMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICreateAuthorMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICreateAuthorMutation>(CreateAuthorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateAuthor', 'mutation');
    },
    GetAllAuthors(variables?: IGetAllAuthorsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IGetAllAuthorsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IGetAllAuthorsQuery>(GetAllAuthorsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllAuthors', 'query');
    },
    Author(variables: IAuthorQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IAuthorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IAuthorQuery>(AuthorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Author', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;