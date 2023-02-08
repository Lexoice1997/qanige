import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';
import { SubcategoriesEntity } from './entities/subcategories.entity';

@Injectable()
export class SubcategoriesService {
  constructor(
    @InjectRepository(SubcategoriesEntity)
    private repository: Repository<SubcategoriesEntity>,
  ) {}

  async createSubcategory(dto: CreateSubcategoryDto) {
    const subcategory = await this.repository.save({
      name: dto.name,
      category: { id: dto.categoryId },
    });
    return subcategory;
  }

  async getAllSubcategories() {
    const subcategories = await this.repository.find();
    return subcategories;
  }

  async getSubcategoryById(id: string) {
    const subcategory = await this.repository.findOneBy({ id });
    return subcategory;
  }

  async updateSubcategory(id: string, dto: UpdateSubcategoryDto) {
    const subcategory = await this.repository.update(id, dto);
    return subcategory;
  }

  async removeSubcategory(id: string) {
    const subcategory = await this.repository.delete(id);
    return id;
  }
}
