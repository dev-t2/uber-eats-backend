import { CacheModule, forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JwtAuthGuard, JwtAuthStrategy } from './jwt';

@Module({
  imports: [
    JwtModule.register({ secret: process.env.JWT_SECRET_KEY }),
    CacheModule.register({ ttl: 5 * 60 * 1000 }),
    forwardRef(() => UsersModule),
  ],
  providers: [AuthService, JwtAuthStrategy, JwtAuthGuard],
  exports: [AuthService],
})
export class AuthModule {}
