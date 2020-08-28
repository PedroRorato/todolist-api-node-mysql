const db = require('../../db');

module.exports = {
    async index(request, response) {

        let sql = 'SELECT * FROM users';
        db.query(sql, (err, result) => {
            if(err) throw err;
            return response.json(result);
        });
    },

    async show(request, response) {

        let sql = `SELECT * FROM users WHERE id = ${request.params.id}`;
        db.query(sql, (err, result) => {
            if(err) throw err;
            return response.json(result);
        });
    },

    async store(request, response) {

        const { name, email, password } = request.body;
        
        let user = { name, email, password }
        let sql = 'INSERT INTO users SET ?';
        db.query(sql, user, (err, result) => {
            if(err) throw err;
        });
        return response.json({ message: 'User succesfully created!' });
    },

    async update(request, response) {

        const { name, email, password } = request.body;
        
        let user = { name, email, password }
        let sql = 'INSERT INTO users SET ?';
        db.query(sql, user, (err, result) => {
            if(err) throw err;
        });
        return response.json({ message: 'User succesfully created!' });
    },

    async destroy(request, response) {

        const { name, email, password } = request.body;
        
        let user = { name, email, password }
        let sql = 'INSERT INTO users SET ?';
        db.query(sql, user, (err, result) => {
            if(err) throw err;
        });
        return response.json({ message: 'User succesfully created!' });
    }
}