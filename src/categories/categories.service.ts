import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoriesEntity } from './entities/categories.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoriesEntity)
    private repository: Repository<CategoriesEntity>,
  ) {}

  async createCategory(dto: CreateCategoryDto) {
    const category = await this.repository.save(dto);
    return category;
  }

  async getAllCategories() {
    const categories = await this.repository.find({
      relations: { subcategories: true },
    });
    return categories;
  }

  async getCategoryById(id: string) {
    const category = await this.repository.findOneBy({ id });
    return category;
  }

  async updateCategory(id: string, dto: UpdateCategoryDto) {
    const category = await this.repository.update(id, dto);
    return category;
  }

  async removeCategory(id: string) {
    const category = await this.repository.delete(id);
    return id;
  }
}
