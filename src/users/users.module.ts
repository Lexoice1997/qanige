import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesEntity } from 'src/categories/entities/categories.entity';
import { RolesEntity } from 'src/roles/entities/role.entity';
import { RolesModule } from 'src/roles/roles.module';
import { RegionsEntity } from './../regions/entities/regions.entity';
import { SubcategoriesEntity } from './../subcategories/entities/subcategories.entity';
import { UsersEntity } from './entities/users.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    TypeOrmModule.forFeature([
      UsersEntity,
      CategoriesEntity,
      SubcategoriesEntity,
      RegionsEntity,
      RolesEntity,
    ]),
    RolesModule,
  ],
  exports: [UsersService],
})
export class UsersModule {}
