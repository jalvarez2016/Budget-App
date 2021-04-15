const express = require('express')
const router = express.Router();
const itemsController = require('../controllers/itemsController');
const userController = require("../controllers/usersController");

router.use('/:id', userController.verifyUser)
router.get('/:id', itemsController.getItem);
router.get('/:id/edit', itemsController.editItem);

router.post('/', itemsController.newItem);

module.exports = router;