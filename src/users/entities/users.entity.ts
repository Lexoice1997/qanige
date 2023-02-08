import { ApiProperty } from '@nestjs/swagger';
import {
  CategoriesEntity
} from 'src/categories/entities/categories.entity';
import { RegionsEntity } from 'src/regions/entities/regions.entity';
import { RolesEntity } from 'src/roles/entities/role.entity';
import { SubcategoriesEntity } from 'src/subcategories/entities/subcategories.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity('users')
export class UsersEntity {
  @ApiProperty({ example: '1', description: 'id' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: 'Azamat', description: 'Firstname' })
  @Column()
  firstname: string;

  @ApiProperty({ example: 'Berdimuratov', description: 'Lastname' })
  @Column()
  lastname: string;

  @ApiProperty({ example: '+998972411997', description: 'Phone' })
  @Column({ unique: true })
  phone: string;

  @ApiProperty({ example: 'lexoice1997@gmail.com', description: 'Email' })
  @Column({ unique: true })
  email: string;

  @ApiProperty({ example: 'I am 29 years old.', description: 'About' })
  @Column({ nullable: true })
  about: string;

  @ApiProperty({ example: 'png.jpg', description: 'Avatar' })
  @Column({ nullable: true })
  avatar: string;

  @ApiProperty({ example: '3 years', description: 'Experience' })
  @Column()
  experience: string;

  @ApiProperty({ example: 'false', description: 'Banned' })
  @Column({ nullable: true, default: false })
  banned: boolean;

  @ApiProperty({ example: 'For ...', description: 'Ban reason' })
  @Column({ nullable: true })
  banReason: string;

  @ManyToOne(() => RegionsEntity, (region) => region.users)
  region: RegionsEntity;

  @ManyToOne(() => CategoriesEntity, (category) => category.users)
  category: CategoriesEntity;

  @ManyToMany(() => SubcategoriesEntity, (subcategory) => subcategory.users, {
    cascade: true,
  })
  @JoinTable()
  subcategories: SubcategoriesEntity[];

  @ManyToMany(() => RolesEntity, (role) => role.users, {
    cascade: true,
  })
  @JoinTable()
  roles: RolesEntity[];
}
