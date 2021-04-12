const express = require('express');

const router = express.Router();
const userRouter = require('./api/usersRouter.js');

router.use('/users', userRouter);

module.exports = router;
