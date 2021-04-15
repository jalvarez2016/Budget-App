const bcrypt = require('bcrypt');
const User = require('../models/User');
const Budget = require('../models/Budget');
const utils = require('../utils.js');

const getUser = async (req, res) => {
  try {
    const { user } = req.session;
    const budgets = await Budget.getUserBudgets(user.id);
    user.budgets = budgets;
    res.render('user', { title: `${user.firstname}'s Page`, user, formatter: utils.formatAsMoney });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const addUser = async (req, res) => {
  try {
    const {
      firstname, lastname, email, birthday, password
    } = req.body;
    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) throw new Error(err);
      const user = await User.addUser(firstname, lastname, email, birthday, hash);
      req.session.user = user;
      res.redirect(`/users/${user.id}`);
    });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const loginUser = async (req, res) => {
  try {
    console.log('logining in');
    const { email, password } = req.body;
    const user = await User.findUser(email);
    const match = await bcrypt.compare(password, user.encrypted_password);
    if (match) {
      req.session.user = user;
      res.redirect(`/users/${user.id}`);
    } else {
      res.redirect('/signin');
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const getUserEdit = async (req, res) => {
  try {
    const user = await User.getUser(req.params.id);
    user.birthday = utils.formatDate(user.birthday);
    res.render('editUser', { title: 'Editing User', user });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

const verifyUser = async (req, res, next) => {
  if (!req.session.user) {
    res.redirect('/');
  } else {
    next();
  }
};

module.exports = {
  getUser,
  addUser,
  loginUser,
  getUserEdit,
  verifyUser
};
