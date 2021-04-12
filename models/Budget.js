const query = require('../db/config');

// Needs to be adjusted to budget logic
class Budget {
  static getUserBudgets(userId) {
    const queryText = 'SELECT * FROM budgets WHERE user_id = $1';
    return query(queryText, [userId]).then((results) => results.rows);
  }

  static getBudget(id) {
    const queryText = 'SELECT * FROM budgets WHERE id = $1';
    return query(queryText, [id]).then((results) => results.rows[0]);
  }

  static addBudget(userId, budgetAmount, title, description, bannerStyle) {
    const queryText = 'INSERT INTO budgets (user_id, budget_amount, title, description, banner_style) VALUES ($1, $2, $3, $4, $5) RETURNING user_id, budget_amount, title, description, banner_style';
    return query(queryText, [userId,
      budgetAmount,
      title,
      description,
      bannerStyle]).then((results) => results.rows[0]);
  }

  static removeBudget(id) {
    const queryText = 'DELETE FROM budgets WHERE id = $1';
    return query(queryText, [id]);
  }

  static updateBudget(budgetAmount, title, description, bannerStyle, id) {
    const queryText = 'UPDATE budgets SET budget_amount = $1, title = $2, description = $3, banner_style = $4 WHERE id = $5 RETURNING  budget_amount, title, description, banner_style';
    return query(queryText, [budgetAmount, title, description, bannerStyle, id]).then((results) => results.rows[0]);
  }
}

module.exports = Budget;
