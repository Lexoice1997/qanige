import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegistrationDto } from './dto/registartion.dto';
import { RegistartionUserDto } from './dto/registration-user.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto)
  }

  @Post('/registration')
  registration(@Body() dto: RegistrationDto) {
    return this.authService.registration(dto)
  }

  @Post('/user-registration') 
  userRegistration(@Body() dto: RegistartionUserDto) {
    return this.authService.userRegistration(dto)
  }
}
