const Item = require('../models/Item');
const Budget = require('../models/Budget');

const getItem = async (req, res) => {
  try {
    const item = await Item.getItem(req.params.id);
    const budget = await Budget.getBudget(item.budget_id)
    res.render('item', { title: `${budget.title}`, item, user: req.session.user });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const addItem = async (req, res) => {
  try {
    const { user } = req.session;
    console.log(user);
    const budget = await Budget.getBudget(req.params.id);
    res.render('addItem', { title: 'New Item', user, user: req.session.user, budget });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const newItem = async (req, res) => {
  try {
    const {budget_id, price, rating, title, description, count, purchase_date, img} = req.body;
    await Item.addItem(budget_id, price, rating, title, description, count, purchase_date, img);
    res.redirect(`/budgets/${budget_id}`);
    console.log(data);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const editItem = async (req, res) => {
  try {
    const item = await Item.getItem(req.params.id);
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
