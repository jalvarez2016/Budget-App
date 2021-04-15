const express = require('express');

const router = express.Router();
const bannerController = require('../../controllers/api/bannersController.js');

router.get('/:id', bannerController.getBanner);

module.exports = router;
