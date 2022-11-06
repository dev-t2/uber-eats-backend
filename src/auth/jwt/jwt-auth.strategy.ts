import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { UsersRepository } from 'src/users/users.repository';

interface IPayload {
  sub: string;
  id: number;
}

@Injectable()
export class JwtAuthStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersRepository: UsersRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: process.env.JWT_SECRET_KEY,
    });
  }

  async validate({ sub, id }: IPayload) {
    if (sub !== 'access') {
      throw new UnauthorizedException();
    }

    const user = await this.usersRepository.findUserById(id);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
