import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User as UserModel } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly svc: UsersService) {}

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<UserModel> {
    return this.svc.findOne(+id);
  }

  @Get('/')
  async getAll(): Promise<UserModel[]> {
    return this.svc.findAll();
  }

  @Post('/')
  async createDraft(
    @Body() userData: { email: string; name: string; password: string },
  ): Promise<UserModel> {
    const { email, name, password } = userData;
    return this.svc.createUser({
      email,
      name,
      password,
    });
  }

  // @Delete('/:id')
  // async delete(@Param('id') id: string): Promise<UserModel> {
  //   // TODO return no content
  //   return this.svc.deleteUser({ id });
  // }
}
