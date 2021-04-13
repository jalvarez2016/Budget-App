const query = require('../db/config');

class User {
  static getUsers() {
    const queryText = 'SELECT * FROM users';
    return query(queryText).then((results) => results.rows);
  }

  static getUser(id) {
    const queryText = 'SELECT * FROM users WHERE id = $1';
    return query(queryText, [id]).then((results) => results.rows[0]);
  }

  static findUser(email) {
    const queryText = 'SELECT * FROM users WHERE email = $1';
    return query(queryText, [email]).then((results) => results.rows[0]);
  }

  // needs to have more data pushed into database
  static addUser(firstname, lastname, email, birthday, password) {
    const queryText = 'INSERT INTO users (firstname, lastname, email, birthday, encrypted_password) VALUES ($1, $2, $3, $4, $5) RETURNING *;';
    return query(queryText, [firstname, lastname, email, birthday, password]).then((results) => results.rows[0]);
  }

  static removeUser(id) {
    const queryText = 'DELETE FROM users WHERE id = $1';
    return query(queryText, [id]);
  }

  // needs more data
  static updateUser(id, firstname, lastname, email, birthday) {
    const queryText = 'UPDATE users SET firstname = $2, lastname = $3, email = $4, birthday = $5 WHERE id = $1 RETURNING *;';
    return query(queryText, [id, firstname, lastname, email, birthday]).then((results) => results.rows[0]);
  }

  static changePassword(id, newPassword) {
    const queryText = 'UPDATE users SET encrypted_password = $2 WHERE id = $1;';
    return query(queryText, [id, newPassword]).then((results) => results.rows[0]);
  }
}

module.exports = User;
