import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";

@Entity()
export class MenuItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column({ type: "integer", default: null })
  parentId: number;

  @Column({ type: "datetime" })
  createdAt: string;

  @ManyToOne(() => MenuItem, (menuItem) => menuItem.children)
  @JoinColumn()
  parent: MenuItem;

  @OneToMany(() => MenuItem, (menuItem) => menuItem.parent)
  children: MenuItem[];
}
