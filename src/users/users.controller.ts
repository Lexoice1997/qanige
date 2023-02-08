import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { ApiResponse, ApiTags } from '@nestjs/swagger/dist';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersEntity } from './entities/users.entity';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Get users' })
  @ApiResponse({ status: 200, type: UsersEntity })
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  // @Get('/:id')
  // getOne(@Param('id') id: string) {
  //   return this.usersService.getUser(id);
  // }

  @ApiOperation({ summary: 'Create users' })
  @ApiResponse({ status: 200, type: UsersEntity })
  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.usersService.createUser(dto);
  }

  // @Put('/:id')
  // update(@Param('id') id: string ,@Body() dto: UpdateSubcategoryDto) {
  //   return this.usersService.updateSubcategory(id, dto);
  // }

  // @Delete('/id')
  // delete(@Param('id') id: string) {
  //   return this.usersService.removeSubcategory(id);
  // }
}
