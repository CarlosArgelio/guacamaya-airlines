import { Entity, Column } from 'typeorm'

import { BaseEntity } from './base'

@Entity()
export class Airports extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  name!: string
}
