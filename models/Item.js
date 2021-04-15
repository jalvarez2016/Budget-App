const query = require('../db/config');

class Item {
  static getItem(id) {
    const queryText = 'SELECT * FROM items WHERE id = $1';
    return query(queryText, [id]).then((results) => results.rows[0]);
  }

  static getItemsByBudget(budgetId) {
    const queryText = 'SELECT * FROM items WHERE budget_id = $1';
    return query(queryText, [budgetId]).then((results) => results.rows);
  }

  static addItem(budgetId, price, rating, title, description, count, purchaseDate) {
    const queryText = 'INSERT INTO items (budget_id, price, rating, title, description, count, purchase_date) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
    return query(queryText, [budgetId,
      price,
      rating,
      title,
      description,
      count,
      purchaseDate]).then((results) => results.rows[0]);
  }

  static removeItem(id) {
    const queryText = 'DELETE FROM items WHERE id = $1';
    return query(queryText, [id]);
  }

  static updateItem(price, rating, title, description, count, purchaseDate, id) {
    const queryText = 'UPDATE items SET price = $1, rating = $2, title = $3, description = $4, count = $5, purchase_date = $6 WHERE id = $7 RETURNING *';
    return query(queryText, [price,
      rating,
      title,
      description,
      count,
      purchaseDate,
      id]).then((results) => results.rows[0]);
  }
}

module.exports = Item;
