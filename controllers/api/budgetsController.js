const Budget = require('../../models/Budget.js');

const getBudget = async (req, res) => {
  try {
    const budget = await Budget.getBudget(req.params.id);
    res.status(200).json({ msg: 'Budget returned successfully', data: budget });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const getAllUserBudgets = async (req, res) => {
  try {
    const budgets = await Budget.getUserBudgets(req.body.userId);
    res.status(200).json({ msg: `Budgets for userId:${req.body.userId} returned successfully`, data: budgets });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const addBudget = async (req, res) => {
  try {
    const addedBudget = await Budget.addBudget(
      req.body.userId,
      req.body.budgetAmount,
      req.body.title,
      req.body.description,
      req.body.bannerStyle
    );
    res.status(201).json({ msg: 'Budget created successfully', data: addedBudget });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const deleteBudget = async (req, res) => {
  try {
    await Budget.removeBudget(req.params.id);
    res.status(200).json({ msg: `Budget id:${req.params.id} deleted successfully` });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const updateBudget = async (req, res) => {
  try {
    const updatedBudget = await Budget.updateBudget(
      req.body.budgetAmount,
      req.body.title,
      req.body.description,
      req.body.bannerStyle,
      req.params.id
    );
    res.status(200).json({ msg: `Budget id:${req.params.id} updated successfully`, data: updatedBudget });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

module.exports = {
  getBudget,
  getAllUserBudgets,
  addBudget,
  updateBudget,
  deleteBudget
};
