const Budget = require('../models/Budget');

const getBudget = async (req, res) => {
  try {
    const budget = await Budget.getBudget(req.params.id);
    res.render('budget', { title: `${budget.title}`, budget });
  } catch {
    res.sendStatus(500);
  }
};

const addBudget = async (req, res) => {
  try {
    const { user } = req.session;
    res.render('addBudget', { title: 'New Budget', user });
  } catch {
    res.sendStatus(500);
  }
};

// might want to move this to the api
const newBudget = async (req, res) => {
  try {
    const data = req.body;
    data.user_id = req.params.id;
    console.log(data);
  } catch {
    res.sendStatus(500);
  }
};

const editBudget = async (req, res) => {
  try {
    const budget = await Budget.getBudget(req.params.id);
    res.render('editBudget', { title: `Editing ${budget.title}`, budget });
  } catch {
    res.sendStatus(500);
  }
};

module.exports = {
  getBudget,
  addBudget,
  editBudget,
  newBudget
};
