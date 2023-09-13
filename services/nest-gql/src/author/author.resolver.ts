import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { AuthorType } from './author.model';

@Resolver()
export class AuthorResolver {
  constructor(private authorService: AuthorService) {}

  /**
   * Query to get all authors
   *
   * query {
   *   allAuthors {
   *     id
   *     name
   *   }
   * }
   */
  @Query(() => [AuthorType], { name: 'allAuthors' })
  async getAllAuthors() {
    return this.authorService.getAllAuthors();
  }

  /**
   * Query to get author by id
   *
   * query {
   *   author(id: "f47304c4-5e83-4982-bac6-c6fb3e87800e") {
   *     id
   *     name
   *   }
   * }
   */
  @Query(() => AuthorType, { name: 'author' })
  async getAuthorById(@Args('id', { type: () => ID }) id: string) {
    return this.authorService.getAuthorById(id);
  }

  /**
   * Mutation to create author
   *
   * mutation {
   *   createAuthor(name: "John Doe") {
   *     id
   *     name
   *   }
   * }
   */
  @Mutation(() => AuthorType, { name: 'createAuthor' })
  async createAuthor(@Args('name') name: string) {
    return this.authorService.createAuthor(name);
  }
}
