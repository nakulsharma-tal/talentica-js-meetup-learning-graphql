import { Field, ID, ObjectType } from '@nestjs/graphql';
import { AuthorType } from '../author/author.model';

@ObjectType()
export class ArticleType {
  @Field(() => ID)
  id: string;

  @Field()
  createdAt: Date;

  @Field(() => AuthorType)
  author: AuthorType;

  @Field(() => [String])
  tags: string[];

  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => [String])
  urls: string[];
}
