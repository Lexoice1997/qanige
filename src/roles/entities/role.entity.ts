import { UsersEntity } from 'src/users/entities/users.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('roles')
export class RolesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  value: string;

  @Column()
  description: string;

  @ManyToMany(() => UsersEntity, (user) => user.roles)
  users: UsersEntity[];
}
