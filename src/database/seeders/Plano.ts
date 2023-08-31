import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Plano from 'App/Models/Plano'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Plano.createMany([
      {
        name: 'Sulamerica',
      },
      {
        name: 'Unimed',
      },
      {
        name: 'Bradesco',
      },
      {
        name: 'Amil',
      },
      {
        name: 'Porto Seguro',
      },
      {
        name: 'Notredame',
      }
    ])

  }
}
