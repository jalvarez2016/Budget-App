const express = require('express');

const router = express.Router();
const usersController = require('../../controllers/api/usersController.js');

router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUser);

router.post('/', usersController.addUser);

router.patch('/:id', usersController.updateUser);
router.patch('/:id/password', usersController.changePassword);

router.delete('/:id', usersController.deleteUser);

module.exports = router;
