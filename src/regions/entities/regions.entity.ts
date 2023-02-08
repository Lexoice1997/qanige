import { UsersEntity } from 'src/users/entities/users.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('regions')
export class RegionsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => UsersEntity, (users) => users.region)
  users: UsersEntity[];
}
