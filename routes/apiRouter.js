const express = require('express');

const router = express.Router();
const userRouter = require('./api/usersRouter.js');
const budgetRouter = require('./api/budgetRouter.js');
const itemRouter = require('./api/itemRouter.js');

router.use('/users', userRouter);
router.use('/budgets', budgetRouter);
router.use('/items', itemRouter);

module.exports = router;
