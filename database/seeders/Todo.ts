import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Todo from 'App/Models/Todo'

export default class TodoSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Todo.createMany([
      {
        tugas:'Test 123',
        deskripsi:'Test 123'
      },
      {
        tugas:'Test 456',
        deskripsi:'Test 456'
      }
    ])
  }
}
