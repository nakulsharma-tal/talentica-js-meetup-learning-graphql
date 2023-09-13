import { Field, ID, InputType } from '@nestjs/graphql';

@InputType('CreateArticleInput')
export class CreateArticleInput {
  @Field(() => ID)
  authorId: string;

  @Field(() => [String])
  tags: string[];

  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => [String])
  urls: string[];
}
