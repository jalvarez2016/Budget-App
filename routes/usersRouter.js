const express = require('express');

const router = express.Router();
const usersController = require('../controllers/usersController');
const budgetsController = require('../controllers/budgetsController');

// router.get('/', usersController.homeView);
router.post('/login', usersController.loginUser);
// router.get('/new', usersController.addUserView);
router.use('/:id', usersController.verifyUser);
router.get('/:id', usersController.getUser);
router.get('/:id/edit', usersController.getUserEdit);
router.post('/', usersController.addUser);
// router.post('/login', usersController.loginUser);
// router.post('/logout', usersController.logoutUser);
// router.delete('/:id', usersController.removeUserView);
// router.patch('/:id', usersController.updatedUserView);

router.get('/:id/budgets/new', budgetsController.addBudget);

module.exports = router;
