import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegionsEntity } from './entities/regions.entity';
import { RegionsController } from './regions.controller';
import { RegionsService } from './regions.service';
import { UsersEntity } from 'src/users/entities/users.entity';

@Module({
  providers: [RegionsService],
  controllers: [RegionsController],
  imports: [TypeOrmModule.forFeature([RegionsEntity, UsersEntity])],
})

export class RegionsModule {}
