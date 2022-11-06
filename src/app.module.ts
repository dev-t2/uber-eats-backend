import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';

import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision')
          .default('development'),
        PORT: Joi.number().default(3000),
        DATABASE_URL: Joi.string().required(),
        ADMIN_NAME: Joi.string().required(),
        ADMIN_PASSWORD: Joi.string().required(),
        JWT_SECRET_KEY: Joi.string().required(),
      }),
      validationOptions: { abortEarly: true },
    }),
    UsersModule,
    PrismaModule,
    AuthModule,
  ],
})
export class AppModule {}
