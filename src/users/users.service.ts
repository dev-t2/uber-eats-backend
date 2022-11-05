import { Injectable } from '@nestjs/common';

import { UsersRepository } from './users.repository';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  createUser(createUserDto: CreateUserDto) {
    console.log(createUserDto);

    return 'This action adds a new user';
  }
}
