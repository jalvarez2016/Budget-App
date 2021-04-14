const query = require('../db/config');

class Banner {
  static getBanner(id) {
    const queryText = 'SELECT * FROM banners WHERE id = $1';
    return query(queryText, [id]).then((results) => results.rows[0].name);
  }
}

module.exports = Banner;
