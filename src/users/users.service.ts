import { BadRequestException, Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';

import { UsersRepository } from './users.repository';
import { CreateUserDto, LoginDto } from './users.dto';

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

  async login({ email, password }: LoginDto) {
    const user = await this.usersRepository.findUserByEmail(email);

    if (!user) {
      throw new BadRequestException();
    }

    const isMatchedPassword = await bcrypt.compare(password, user.password);

    if (!isMatchedPassword) {
      throw new BadRequestException();
    }

    return;
  }
}
