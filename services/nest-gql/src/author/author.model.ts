import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthorType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}
