import { PickType } from '@nestjs/swagger';

import { User } from './entities';

export class CreateCodeDto extends PickType(User, ['email'] as const) {}

export class CreateUserDto extends PickType(User, ['email', 'password', 'role'] as const) {}

export class LoginDto extends PickType(User, ['email', 'password'] as const) {}

export class UserDto extends PickType(User, ['id', 'email'] as const) {}

export class UpdateUserEmailDto extends PickType(User, ['email'] as const) {}

export class UpdateUserPasswordDto extends PickType(User, ['password'] as const) {}
