const express = require('express');

const router = express.Router();
const budgetsController = require('../../controllers/api/budgetsController.js');

router.get('/', budgetsController.getAllUserBudgets);
router.get('/:id', budgetsController.getBudget);

router.post('/', budgetsController.addBudget);

router.patch('/:id', budgetsController.updateBudget);

router.delete('/:id', budgetsController.deleteBudget);

module.exports = router;
