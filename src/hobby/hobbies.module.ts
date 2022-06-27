import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { HobbiesService } from './hobbies.service';
import { HobbiesResolver } from './graphql/hobbies.resolver';

@Module({
  providers: [PrismaService, HobbiesService, HobbiesResolver],
  exports: [HobbiesService, HobbiesResolver],
})
export class HobbiesModule {}
