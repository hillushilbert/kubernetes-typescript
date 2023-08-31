import { DateTime } from 'luxon'
import {
  column,
  BaseModel,
  belongsTo,
  BelongsTo,
  manyToMany,
  ManyToMany
} from '@ioc:Adonis/Lucid/Orm'
import Endereco from './Endereco'
import Plano from './Plano'

export default class Clinica extends BaseModel 
{
  @column({ isPrimary: true })
  public id: number

  @column()
  public razaoSocial: string

  @column()
  public cnpj: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Endereco)
  public endereco: BelongsTo<typeof Endereco>

  @manyToMany(() => Plano)
  public planos: ManyToMany<typeof Plano>

}
