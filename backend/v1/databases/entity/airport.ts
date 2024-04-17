import { Entity, Column } from 'typeorm'

import { BaseEntity } from './base.entity'

@Entity()
export class Airports extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  name!: string
}
