import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';

import { UsersRepository } from 'src/users/users.repository';
import { LoginDto } from 'src/users/users.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersRepository: UsersRepository,
  ) {}

  async login({ email, password }: LoginDto) {
    const user = await this.usersRepository.findUserByEmail(email);

    if (!user) {
      throw new BadRequestException();
    }

    const isMatchedPassword = await bcrypt.compare(password, user.password);

    if (!isMatchedPassword) {
      throw new BadRequestException();
    }

    return {
      accessToken: this.jwtService.sign({ sub: 'token', id: user.id }),
    };
  }
}
