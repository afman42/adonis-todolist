/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('/todo', 'TodosController.index');
Route.get('/tambah-data', 'TodosController.create');
Route.get('/tambah-data/:id', 'TodosController.editTodo');
Route.post('/insert-data','TodosController.createTodo');
Route.put('/update-data','TodosController.updateTodo');
Route.delete('/delete-data/:id','TodosController.deleteTodo');