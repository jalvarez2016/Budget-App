const query = require('../db/config');

class Item {
  static getItem(id) {
    const queryText = 'SELECT * FROM items WHERE id = $1';
    return query(queryText, [id]).then((results) => results.rows[0]);
  }

  static addItem(budgetId, price, rating, title, description, count, purchaseDate, img) {
    const queryText = 'INSERT INTO items (budget_id, price, rating, title, description, count, purchase_date, img) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
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

  static updateItem(price, rating, title, description, count, purchaseDate, img, id) {
    const queryText = 'UPDATE items SET price = $1, rating = $2, title = $3, description = $4, count = $5, purchase_date = $6, img = $7 WHERE id = $8 RETURNING *';
    return query(queryText, [price,
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
