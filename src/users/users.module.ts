import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './graphql/users.resolver';
import { PrismaService } from 'src/prisma.service';
import { UserController } from './user.controller';
import { HobbiesModule } from '../hobby/hobbies.module';

@Module({
  imports: [HobbiesModule],
  controllers: [UserController],
  providers: [PrismaService, UsersService, UsersResolver],
  exports: [UsersService, UsersResolver],
})
export class UsersModule {}
