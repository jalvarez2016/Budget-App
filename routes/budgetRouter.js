const express = require('express')
const router = express.Router();
const budgetsController = require('../controllers/budgetsController');
const itemsController = require('../controllers/itemsController');
const usersController = require('../controllers/usersController');

router.get('/', (req, res) => res.redirect('/users')); //get the user id from cookie in session else home
router.get('/new', budgetsController.addBudget);
router.use('/:id', usersController.verifyUser);
router.get('/:id', budgetsController.getBudget);
router.get('/:id/edit', budgetsController.editBudget);
router.get('/:id/items/new', itemsController.addItem);
router.get('/:id/analyze', budgetsController.analyzeBudget);

router.post('/', budgetsController.newBudget);

module.exports = router;