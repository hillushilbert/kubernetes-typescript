import { DateTime } from 'luxon'

import {
  column,
  BaseModel,
  hasOne,
  HasOne
} from '@ioc:Adonis/Lucid/Orm'
import Clinica from './Clinica'

export default class Endereco extends BaseModel 
{

  @hasOne(() => Clinica)
  public clinica: HasOne<typeof Clinica>

  @column({ isPrimary: true })
  public id: number

  @column()
  public endereco: string

  @column()
  public numero: string

  @column()
  public complemento: string

  @column()
  public bairro: string

  @column()
  public cidade: string

  @column()
  public uf: string

  @column()
  public cep: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
