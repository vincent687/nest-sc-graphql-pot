import { Injectable } from '@nestjs/common';
import { Prisma, Hobby } from '@prisma/client';
import { User } from 'src/users/graphql/user.model';
import { PrismaService } from '../prisma.service';
import { CreateHobbyInput } from './dto/create-hobby.input';

@Injectable()
export class HobbiesService {
  constructor(private prisma: PrismaService) {}
  create(createHobbyInput: CreateHobbyInput) {
    const newHobby = this.prisma.hobby.create({
      data: {
        name: createHobbyInput.name,
        postedBy: { connect: { id: 1 } },
      },
    });
    return newHobby;
  }

  findAll() {
    return this.prisma.hobby.findMany();
  }
  findAllByUserId(user: User) {
    return this.prisma.hobby.findMany({
      where: { postedById: user.id },
    });
  }

  findOne(id: number) {
    return this.prisma.hobby.findUnique({ where: { id: id } });
  }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
