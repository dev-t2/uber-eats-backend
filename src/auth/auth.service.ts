import { BadRequestException, CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Cache } from 'cache-manager';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

import { UsersRepository } from 'src/users/users.repository';
import { LoginDto } from 'src/users/users.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cache: Cache,
    private readonly jwtService: JwtService,
    private readonly usersRepository: UsersRepository,
  ) {}

  async createCode(email: string) {
    const isEmail = await this.usersRepository.findUserByEmail(email);

    if (isEmail) {
      throw new BadRequestException();
    }

    const code = uuidv4();

    await this.cache.set(email, code);
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

    return {
      token: this.jwtService.sign({ sub: 'token', id: user.id }),
    };
  }
}
