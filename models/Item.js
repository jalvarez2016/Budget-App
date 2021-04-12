const query = require('../db/config');

class Item {
    static getUserItems(id){
        const queryText = 'SELECT * FROM items WHERE id = $1';
        return query(queryText, [id]).then(results => results.rows);
    }

    static getItem(id){
        const queryText = 'SELECT * FROM items WHERE id = $1';
        return query(queryText, [id]).then(results => results.rows[0]);
    }

    static addUser(name, email, password){
        const queryText = 'INSERT INTO users (name, email, encrypted_password) VALUES ($1, $2, $3) RETURNING name, email, encrypted_password, id'
        return query(queryText, [name, email, password]).then(results => results.rows[0]);
    }

    static removeUser(id){
        const queryText = 'DELETE FROM users WHERE id = $1';
        return query(queryText, [id]);
    }

    static updateUser(id, name, email, password){
        const queryText = 'UPDATE users SET name = $2, email = $3, encrypted_password = $4 WHERE id = $1 RETURNING name, email, encrypted_password, id';
        return query(queryText, [id, name, email, password]).then(results => results.rows[0]);
    }

    static findUser(name){
        const queryText = 'SELECT * FROM users WHERE name = $1';
        return query(queryText, [name]).then(results => results.rows[0]);
    }
}

module.exports = Item;