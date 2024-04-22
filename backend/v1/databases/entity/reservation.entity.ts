import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Timestamp,
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

  @Column({
    type: 'timestamp',
  })
  dateStart!: string

  @Column({
    type: 'timestamp',
  })
  dateEnd!: string

  @Column({
    type: 'int',
  })
  adults!: number

  @Column({
    type: 'int',
  })
  children!: number

  @Column({
    type: 'boolean',
    default: false,
  })
  status!: boolean
}
