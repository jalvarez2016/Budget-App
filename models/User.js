const query = require('../db/config');

class User {
    static getUsers(){
        const queryText = 'SELECT * FROM users';
        return query(queryText).then(results => results.rows);
    }

    static getUser(id){
        const queryText = 'SELECT * FROM users WHERE id = $1';
        return query(queryText, [id]).then(results => results.rows[0]);
    }

    //needs to have more data pushed into database
    static addUser(name, email, password){
        const queryText = 'INSERT INTO users (name, email, encrypted_password) VALUES ($1, $2, $3) RETURNING name, email, encrypted_password, id'
        return query(queryText, [name, email, password]).then(results => results.rows[0]);
    }

    static removeUser(id){
        const queryText = 'DELETE FROM users WHERE id = $1';
        return query(queryText, [id]);
    }

    //needs more data
    static updateUser(id, name, email, password){
        const queryText = 'UPDATE users SET name = $2, email = $3, encrypted_password = $4 WHERE id = $1 RETURNING name, email, encrypted_password, id';
        return query(queryText, [id, name, email, password]).then(results => results.rows[0]);
    }
}

module.exports = User;