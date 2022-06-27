import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma.service';
import { Prisma, User } from '@prisma/client';
import { HobbiesService } from '../hobbies.service';
import { Hobby } from './hobby.model';
import { CreateHobbyInput } from '../dto/create-hobby.input';

@Resolver(() => Hobby)
export class HobbiesResolver {
  constructor(private readonly hbsService: HobbiesService) {}

  @Mutation(() => Hobby)
  createHobby(@Args('createHobbyInput') createHobbyInput: CreateHobbyInput) {
    return this.hbsService.create(createHobbyInput);
  }

  @Query(() => [Hobby], { name: 'getHobbies' })
  findAll() {
    return this.hbsService.findAll();
  }

  @Query(() => Hobby, { name: 'hobby' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hbsService.findOne(id);
  }

  // @Mutation(() => User)
  // updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
  //   return this.usersService.update(updateUserInput.id, updateUserInput);
  // }

  // @Mutation(() => User)
  // removeUser(@Args('id', { type: () => Int }) id: number) {
  //   return this.usersService.remove(id);
  // }
}
