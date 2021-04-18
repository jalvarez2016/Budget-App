const Item = require('../models/Item');
const Budget = require('../models/Budget');
const Banner = require('../models/Banner');
const utils = require('../utils.js');

const getItem = async (req, res) => {
  try {
    const item = await Item.getItem(req.params.id);
    const budget = await Budget.getBudget(item.budget_id);
    budget.items = await Item.getItemsByBudget(budget.id);
    budget.banner = await Banner.getBanner(budget.banner_style);
    res.render('item', {
      title: `${budget.title}`, item, budget, user: req.session.user
    });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const addItem = async (req, res) => {
  try {
    const { user } = req.session;
    const budget = await Budget.getBudget(req.params.id);
    res.render('addItem', {
      title: 'New Item', user, user: req.session.user, budget
    });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const newItem = async (req, res) => {
  try {
    const {
      budget_id, price, rating, title, description, count, purchase_date
    } = req.body;
    await Item.addItem(budget_id, price, rating, title, description, count, purchase_date);
    res.redirect(`/budgets/${budget_id}`);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const editItem = async (req, res) => {
  try {
    const item = await Item.getItem(req.params.id);
    item.purchase_date = utils.formatDate(item.purchase_date);
    res.render('editItem', { title: `Editing ${item.title}`, item, user: req.session.user });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

module.exports = {
  getItem,
  addItem,
  editItem,
  newItem
};
