import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt';
import { User } from 'src/common/decorators';
import { ParsePositiveIntPipe } from 'src/common/pipes';
import { UsersService } from './users.service';
import {
  CreateUserDto,
  LoginDto,
  UpdateUserEmailDto,
  UpdateUserPasswordDto,
  UserDto,
} from './users.dto';

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

  @ApiOperation({ summary: '유저 프로필' })
  @ApiBearerAuth('Token')
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findUser(@Param('id', ParsePositiveIntPipe) id: number) {
    return await this.usersService.findUser(id);
  }

  @ApiOperation({ summary: '이메일 업데이트' })
  @ApiBearerAuth('Token')
  @UseGuards(JwtAuthGuard)
  @Put('email')
  async updateUserEmail(@User() { id }: UserDto, @Body() { email }: UpdateUserEmailDto) {
    return await this.usersService.updateUserEmail(id, email);
  }

  @ApiOperation({ summary: '비밀번호 업데이트' })
  @ApiBearerAuth('Token')
  @UseGuards(JwtAuthGuard)
  @Put('password')
  async updateUserPassword(@User() { id }: UserDto, @Body() { password }: UpdateUserPasswordDto) {
    return await this.usersService.updateUserPassword(id, password);
  }
}
