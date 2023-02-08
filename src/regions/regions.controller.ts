import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { RegionsService } from './regions.service';

@Controller('regions')
export class RegionsController {
  constructor(private regionsService: RegionsService) {}

  @Get()
  getAll() {
    return this.regionsService.getAllRegions();
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.regionsService.getRegionById(id);
  }

  @Post()
  create(@Body() dto: CreateRegionDto) {
    return this.regionsService.createRegion(dto);
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() dto: UpdateRegionDto) {
    return this.regionsService.updateRegion(id, dto);
  }

  @Delete('/id')
  delete(@Param('id') id: string) {
    return this.regionsService.removeRegion(id);
  }
}
