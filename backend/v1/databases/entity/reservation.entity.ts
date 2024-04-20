import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm'

@Entity()
export class Reservations {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt!: Date

  @Column({ type: 'varchar', length: 100 })
  email!: string

  @Column()
  oneWay!: boolean

  @Column()
  roundTrip!: boolean

  @Column({ type: 'varchar', length: 100 })
  from!: string

  @Column({ type: 'varchar', length: 100 })
  to!: string

  @Column()
  dateStart!: Date

  @Column()
  dateEnd!: Date

  @Column()
  adults!: number

  @Column()
  children!: number

  @Column()
  status!: boolean
}
