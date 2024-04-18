import { Entity, Column } from 'typeorm'

import { BaseEntity } from './base'

@Entity()
export class Destinations extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  name!: string

  @Column({ type: 'varchar', length: 100 })
  image!: string
}
