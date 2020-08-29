const db = require('../../db');

module.exports = {
    async index(request, response) {

        let sql = 'SELECT * FROM tasks';
        db.query(sql, (err, result) => {
            if(err) throw err;
            return response.json(result);
        });
    },

    async show(request, response) {

        let sql = `SELECT * FROM tasks WHERE id = ${request.params.id}`;
        db.query(sql, (err, result) => {
            if(err) throw err;
            return response.json(result);
        });
    },

    async store(request, response) {

        const { title, description, user_id } = request.body;
        
        let task = { title, description, user_id }
        let sql = 'INSERT INTO tasks SET ?';
        db.query(sql, task, (err) => {
            if(err) throw err;
            return response.json({ message: 'Task succesfully created!' });
        });
    },

    async update(request, response) {

        const { title, description } = request.body;
        
        let sql = `UPDATE tasks SET
            title = '${title}', description = '${description}'
            WHERE id = ${request.params.id}`;
        db.query(sql, (err) => {
            if(err) throw err;
            return response.json({ message: 'User succesfully updated!' });
        });
    },

    async destroy(request, response) {

        const { name, email, password } = request.body;
        
        let user = { name, email, password }
        let sql = `DELETE FROM tasks WHERE id = ${request.params.id}`;
        db.query(sql, user, (err) => {
            if(err) throw err;
            return response.json({ message: 'User deleted!' });
        });
    }
}