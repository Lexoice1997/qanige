import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesEntity } from 'src/categories/entities/categories.entity';
import { UsersEntity } from 'src/users/entities/users.entity';
import { SubcategoriesEntity } from './entities/subcategories.entity';
import { SubcategoriesController } from './subcategories.controller';
import { SubcategoriesService } from './subcategories.service';

@Module({
  providers: [SubcategoriesService],
  controllers: [SubcategoriesController],
  imports: [
    TypeOrmModule.forFeature([
      SubcategoriesEntity,
      CategoriesEntity,
      UsersEntity,
    ]),
  ],
})
export class SubcategoriesModule {}
