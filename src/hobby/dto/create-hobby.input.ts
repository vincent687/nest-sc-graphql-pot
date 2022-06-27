import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHobbyInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;
}
