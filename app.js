const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');

const db = require('./db/config.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  name: 'BudgetApp'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HOW TO SERVE PUBLIC FILES
// app.use(express.static('public'));
// app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));
// app.use('/jquery', express.static('node_modules/jquery/dist'));

app.set('view engine', 'ejs');

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

app.listen(PORT);
