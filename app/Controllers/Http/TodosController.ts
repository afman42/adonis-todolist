import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Todo from 'App/Models/Todo'

export default class TodosController {
    
    async index( { view } : HttpContextContract){
        const all = await Todo.all();
        return view.render('todo', { all } );
    }

    create( { view } : HttpContextContract){
        return view.render('tambah-todo', { model: true });
    }

    async createTodo( { request, response, session} : HttpContextContract) {
        const tugas = request.input('tugas');
        const deskripsi = request.input('deskripsi');

        const todo = new Todo();
        todo.tugas = tugas;
        todo.deskripsi = deskripsi;

        const model = await todo.save();
        if (model) {
            session.flash('message','Berhasil Ditambah');
            session.flash('status','success');
            return response.redirect('/todo');
        } else {
            session.flash('message','Gagal Ditambah');
            session.flash('status','danger');
            return response.redirect('/todo');
        }
    }

    async editTodo( { params, view } : HttpContextContract) {
        const { id } = params;
        const mo = await Todo.find(id);
        return view.render('tambah-todo', { model: false, mo })
    }

    async updateTodo ( { request, session, response } : HttpContextContract) {
        const id = request.input('id');
        const tugas = request.input('tugas');
        const deskripsi = request.input('deskripsi');

        const todo: any = await Todo.find(id);
        todo.tugas = tugas;
        todo.deskripsi = deskripsi;

        const model = await todo.save();
        if (model) {
            session.flash('message','Berhasil Diubah');
            session.flash('status','success');
            return response.redirect('/todo');
        } else {
            session.flash('message','Gagal Diubah');
            session.flash('status','danger');
            return response.redirect('/todo');
        }
    }

    async deleteTodo({ params,session,response } : HttpContextContract) {
        const { id } = params;
        const model = await Todo.findOrFail(id);
        await model.delete();
        session.flash('message','Berhasil Dihapus');
        session.flash('status','success');
        return response.redirect('/todo');
    }
}
