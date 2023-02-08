import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RolesService } from 'src/roles/roles.service';
import { Repository } from 'typeorm';
import { SubcategoriesEntity } from './../subcategories/entities/subcategories.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersEntity } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
    private roleService: RolesService,
  ) {}

  async createUser(dto: CreateUserDto) {
    const subcategories = [];

    for (let i = 0; i < dto.subcategoriesId.length; i++) {
      const subcategory = new SubcategoriesEntity();
      subcategory.id = dto.subcategoriesId[i];
      subcategories.push(subcategory);
    }

    const role = await this.roleService.getRoleByValue('User');

    const user = await this.usersRepository.save({
      phone: dto.phone,
      password: dto.password,
      firstname: dto.firstname,
      lastname: dto.lastname,
      email: dto.email,
      about: dto.about,
      avatar: dto.avatar,
      experience: dto.experience,
      banned: dto.banned,
      banReason: dto.banReason,
      region: { id: dto.regionId },
      subcategories: subcategories,
      category: { id: dto.categoryId },
      roles: [{ id: role.id }],
    });

    return user;
  }

  async getAllUsers() {
    const users = await this.usersRepository.find({
      relations: {
        category: true,
        subcategories: true,
        region: true,
        roles: true,
      },
    });
    return users;
  }

  async getUserByEmail(email: string) {
    const user = await this.usersRepository.findOne({
      where: { email },
      relations: {
        category: true,
        subcategories: true,
        region: true,
        roles: true,
      },
    });
    return user;
  }

  // async getSubcategoryById(id: string) {
  //   const subcategory = await this.repository.findOneBy({ id });
  //   return subcategory;
  // }

  // async updateSubcategory(id: string, dto: UpdateSubcategoryDto) {
  //   const subcategory = await this.repository.update(id, dto);
  //   return subcategory;
  // }

  // async removeSubcategory(id: string) {
  //   const subcategory = await this.repository.delete(id);
  //   return id;
  // }
}
