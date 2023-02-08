import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from 'src/users/entities/users.entity';
import { CategoriesModule } from './categories/categories.module';
import { CategoriesEntity } from './categories/entities/categories.entity';
import { RegionsEntity } from './regions/entities/regions.entity';
import { RegionsModule } from './regions/regions.module';
import { RolesEntity } from './roles/entities/role.entity';
import { RolesModule } from './roles/roles.module';
import { SubcategoriesEntity } from './subcategories/entities/subcategories.entity';
import { SubcategoriesModule } from './subcategories/subcategories.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { FilesModule } from './files/files.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      entities: [
        RegionsEntity,
        CategoriesEntity,
        SubcategoriesEntity,
        UsersEntity,
        RolesEntity
      ],
      synchronize: true,
    }),
    UsersModule,
    RegionsModule,
    CategoriesModule,
    SubcategoriesModule,
    RolesModule,
    AuthModule,
    FilesModule,
  ],
})
export class AppModule {}
