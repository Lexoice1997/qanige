import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from 'src/users/entities/users.entity';
import { SubcategoriesEntity } from './../subcategories/entities/subcategories.entity';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { CategoriesEntity } from './entities/categories.entity';

@Module({
  providers: [CategoriesService],
  controllers: [CategoriesController],
  imports: [
    TypeOrmModule.forFeature([
      CategoriesEntity,
      SubcategoriesEntity,
      UsersEntity,
    ]),
  ],
})
export class CategoriesModule {}
