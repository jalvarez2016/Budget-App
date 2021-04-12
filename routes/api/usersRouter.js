const express = require('express');

const router = express.Router();
const usersController = require('../../controllers/api/usersController.js');

router.get('/', usersController.getUsers);
router.post('/', usersController.addUser);
// router.get('/:id', usersController.getUser);

module.exports = router;
