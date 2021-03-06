import { Int, ObjectType, Field } from '@nestjs/graphql';
@ObjectType()
export class Hobby {
  @Field((type) => Int)
  id: number;
  @Field((type) => String)
  name: string;
}
