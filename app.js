const express = require('express');
const bcrypt = require('bcrypt');
const session = require('express-session');

const db = require('./db/config.js');

const app = express();
const PORT = process.env.PORT || 8003;

app.set('trust proxy', 1);
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

app.use('*', (req, res) => {
  res.status(404).send();
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

app.listen(PORT);
