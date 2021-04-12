const express = require('express')
const router = express.Router();
const budgetsController = require('../controllers/budgetsController');

router.get('/', (req, res) => res.redirect('/users')); //get the user id from cookie in session else home
router.get('/:id', budgetsController.getBudget);
router.get('/:id/edit', budgetsController.editBudget);

router.post('/', budgetsController.newBudget);

module.exports = router;