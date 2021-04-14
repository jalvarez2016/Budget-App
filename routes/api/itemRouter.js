const express = require('express');

const router = express.Router();
const itemsController = require('../../controllers/api/itemsController');

router.get('/:id', itemsController.getItem);
router.delete('/:id', itemsController.deleteItem);
router.patch('/:id', itemsController.updateItem);
router.post('/', itemsController.createItem);

module.exports = router;
