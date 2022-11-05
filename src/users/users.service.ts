import { BadRequestException, Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';

import { UsersRepository } from './users.repository';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser({ email, password, role }: CreateUserDto) {
    const isEmail = await this.usersRepository.findUserByEmail(email);

    if (isEmail) {
      throw new BadRequestException();
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await this.usersRepository.createUser(email, hashedPassword, role);
  }
}
