import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesEntity } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(RolesEntity) private repository: Repository<RolesEntity>,
  ) {}

  async createRole(dto: CreateRoleDto) {
    const role = await this.repository.save(dto);
    return role;
  }

  async getRoleByValue(value: string) {
    const role = await this.repository.findOne({ where: { value: value } });
    return role;
  }

  async getAllRoles() {
    const roles = await this.repository.find();
    return roles
  }
}
