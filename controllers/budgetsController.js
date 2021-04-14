const Budget = require('../models/Budget');
const Banner = require('../models/Banner');
const Item = require('../models/Item');

const getBudget = async (req, res) => {
  try {
    const items = await Item.getItemsByBudget(req.params.id);
    const budget = await Budget.getBudget(req.params.id);
    budget.banner = await Banner.getBanner(budget.banner_style);
    res.render('budget', {
      title: budget.title, budget, items, user: req.session.user
    });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const addBudget = async (req, res) => {
  try {
    const { user } = req.session;
    console.log(req.session);
    res.render('addBudget', { title: 'New Budget', user, user: req.session.user });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const newBudget = async (req, res) => {
  try {
    const {
      budget_amount, title, description, banner_style
    } = req.body;
    const user_id = req.session.user.id;
    const budget = await Budget.addBudget(user_id, budget_amount, title, description, banner_style);
    res.redirect(`/users/${user_id}`);
    console.log(data);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const editBudget = async (req, res) => {
  try {
    const budget = await Budget.getBudget(req.params.id);
    budget.banner = await Banner.getBanner(budget.banner_style);
    res.render('editBudget', { title: `Editing ${budget.title}`, budget, user: req.session.user });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

module.exports = {
  getBudget,
  addBudget,
  editBudget,
  newBudget
};
