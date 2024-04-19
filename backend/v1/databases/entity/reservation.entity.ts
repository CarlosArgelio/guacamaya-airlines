import { Entity, Column } from 'typeorm'

import { BaseEntity } from './base'

@Entity()
export class Reservations extends BaseEntity {
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
