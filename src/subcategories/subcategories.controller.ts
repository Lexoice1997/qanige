import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SubcategoriesService } from './subcategories.service';
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';

@Controller('subcategories')
export class SubcategoriesController {
  constructor(private subcategoriesService: SubcategoriesService) {}

  @Get()
  getAll() {
    return this.subcategoriesService.getAllSubcategories();
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.subcategoriesService.getSubcategoryById(id);
  }

  @Post()
  create(@Body() dto: CreateSubcategoryDto) {
    return this.subcategoriesService.createSubcategory(dto);
  }

  @Put('/:id')
  update(@Param('id') id: string ,@Body() dto: UpdateSubcategoryDto) {
    return this.subcategoriesService.updateSubcategory(id, dto);
  }

  @Delete('/id')
  delete(@Param('id') id: string) {
    return this.subcategoriesService.removeSubcategory(id);
  }
}
