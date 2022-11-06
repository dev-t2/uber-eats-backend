import { PickType } from '@nestjs/swagger';

import { User } from './entities';

export class CreateUserDto extends PickType(User, ['email', 'password', 'role'] as const) {}

export class LoginDto extends PickType(User, ['email', 'password'] as const) {}

export class UserDto extends PickType(User, ['id', 'email', 'role'] as const) {}
