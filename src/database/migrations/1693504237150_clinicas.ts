import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'clinicas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('razao_social',255);
      table.string('cnpj',14);
      table
        .integer('endereco_id')
        .unsigned()
        .references('enderecos.id')
        .onDelete('CASCADE') // delete profile when user is deleted

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
