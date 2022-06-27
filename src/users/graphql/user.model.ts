import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Hobby } from 'src/hobby/graphql/hobby.model';

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;
  @Field((type) => Date, { name: 'registeredAt' })
  registeredAt: Date;
  @Field((type) => Date)
  updatedAt: Date;
  @Field((type) => String)
  email: string;
  password: string;
  @Field((type) => String, { nullable: true })
  name?: string;
  @Field((type) => [Hobby])
  hobbies: Hobby[];
}
