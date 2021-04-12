const query = require('../db/config');

//Needs to be adjusted to budget logic
class Budget {
    static getUserBudgets(id){
        const queryText = 'SELECT * FROM users';
        return query(queryText).then(results => results.rows);
    }

    static getBudget(id){
        const queryText = 'SELECT * FROM users WHERE id = $1';
        return query(queryText, [id]).then(results => results.rows[0]);
    }

    static addBudget(name, email, password){
        const queryText = 'INSERT INTO users (name, email, encrypted_password) VALUES ($1, $2, $3) RETURNING name, email, encrypted_password, id'
        return query(queryText, [name, email, password]).then(results => results.rows[0]);
    }

    static removeBudget(id){
        const queryText = 'DELETE FROM users WHERE id = $1';
        return query(queryText, [id]);
    }

    static updateBudget(id, data){
        const queryText = 'UPDATE users SET name = $2, email = $3, encrypted_password = $4 WHERE id = $1 RETURNING name, email, encrypted_password, id';
        return query(queryText, [id]).then(results => results.rows[0]);
    }
}

module.exports = Budget;