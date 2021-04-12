const query = require('../db/config');

class Item {
  // static getUserItems(id){
  //     const queryText = 'SELECT * FROM items WHERE id = $1';
  //     return query(queryText, [id]).then(results => results.rows);
  // }

  static getItem(id) {
    const queryText = 'SELECT * FROM items WHERE id = $1';
    return query(queryText, [id]).then((results) => results.rows[0]);
  }

  static addItem(budgetId, price, rating, title, description, count, purchaseDate, img) {
    const queryText = 'INSERT INTO items (budget_idd, price, rating, title, description, count, purchase_date, img) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING name, email, encrypted_password, id';
    return query(queryText, [budgetId,
      price,
      rating,
      title,
      description,
      count,
      purchaseDate,
      img]).then((results) => results.rows[0]);
  }

  static removeItem(id) {
    const queryText = 'DELETE FROM items WHERE id = $1';
    return query(queryText, [id]);
  }

  static updateItem(budgetId, price, rating, title, description, count, purchaseDate, img, id) {
    const queryText = 'UPDATE items SET budget_id = $1, price = $2, rating = $3, title = $4, description = $5, count = $6, purchase_date = $7, img = $8 WHERE id = $9';
    return query(queryText, [budgetId,
      price,
      rating,
      title,
      description,
      count,
      purchaseDate,
      img,
      id]).then((results) => results.rows[0]);
  }
}

module.exports = Item;
