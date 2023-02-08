import { CategoriesEntity } from 'src/categories/entities/categories.entity';
import { UsersEntity } from 'src/users/entities/users.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('subcategories')
export class SubcategoriesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @ManyToOne(() => CategoriesEntity, (category) => category.subcategories)
  category: CategoriesEntity;

  @ManyToMany(() => UsersEntity, (users) => users.subcategories)
  users: UsersEntity[];
}
