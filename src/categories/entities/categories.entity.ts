import { SubcategoriesEntity } from 'src/subcategories/entities/subcategories.entity';
import { UsersEntity } from 'src/users/entities/users.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories')
export class CategoriesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @OneToMany(
    () => SubcategoriesEntity,
    (SubcategoriesEntity) => SubcategoriesEntity.category,
  )
  subcategories: SubcategoriesEntity[];

  @OneToMany(() => UsersEntity, (users) => users.category)
  users: UsersEntity[];
}
