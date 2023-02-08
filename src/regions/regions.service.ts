import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { RegionsEntity } from './entities/regions.entity';

@Injectable()
export class RegionsService {
  constructor(
    @InjectRepository(RegionsEntity)
    private repository: Repository<RegionsEntity>,
  ) {}

  async createRegion(dto: CreateRegionDto) {
    const region = await this.repository.save(dto);
    return region;
  }

  async getAllRegions() {
    const regions = await this.repository.find();
    return regions;
  }

  async getRegionById(id: string) {
    const region = await this.repository.findOneBy({ id });
    return region;
  }

  async updateRegion(id: string, dto: UpdateRegionDto) {
    const region = await this.repository.update(id, dto);
    return region;
  }

  async removeRegion(id: string) {
    const region = await this.repository.delete(id);
    return id;
  }
}
