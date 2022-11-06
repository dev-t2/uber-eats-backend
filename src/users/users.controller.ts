import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { AuthService } from 'src/auth/auth.service';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/jwt';
import { User } from 'src/common/decorators';
import { CreateUserDto, LoginDto, UserDto } from './users.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @ApiOperation({ summary: '회원가입' })
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.createUser(createUserDto);
  }

  @ApiOperation({ summary: '로그인' })
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto);
  }

  @ApiOperation({ summary: '프로필' })
  @ApiBearerAuth('Token')
  @UseGuards(JwtAuthGuard)
  @Get()
  async profile(@User() userDto: UserDto) {
    return userDto;
  }
}
