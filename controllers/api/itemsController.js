const Item = require('../../models/Item');
const Budget = require('../../models/Budget');

const getItem = async (req, res) => {
  try {
    const item = await Item.getItem(req.params.id);
    res.status(200).json(item);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const getItemsByBudget = async (req, res) => {
  try {
    const items = await Item.getItemsByBudget(req.params.id);
    res.status(200).json(items);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const createItem = async (req, res) => {
  try {
    const {
      budgetId, price, rating, title, description, count, purchaseDate
    } = req.body;
    const createdItem = await Item.addItem(budgetId,
      price,
      rating,
      title,
      description,
      count,
      purchaseDate);
    res.status(201).json(createdItem);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const deleteItem = async (req, res) => {
  try {
    const item = await Item.removeItem(req.params.id);
    res.status(200).json({ msg: `Item id: ${req.params.id} deleted successfully` });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const updateItem = async (req, res) => {
  try {
    const {
      price, rating, title, description, count, purchaseDate
    } = req.body;
    const updatedItem = await Item.updateItem(
      price,
      rating,
      title,
      description,
      count,
      purchaseDate,
      req.params.id
    );
    res.status(200).json(updatedItem);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

module.exports = {
  getItem,
  getItemsByBudget,
  updateItem,
  createItem,
  deleteItem
};
