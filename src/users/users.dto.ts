import { PickType } from '@nestjs/swagger';

import { User } from './entities/user.entity';

export class CreateUserDto extends PickType(User, ['email', 'password', 'role'] as const) {}

export class LoginDto extends PickType(User, ['email', 'password'] as const) {}
