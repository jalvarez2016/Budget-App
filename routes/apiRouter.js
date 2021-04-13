const express = require('express');

const router = express.Router();
const userRouter = require('./api/usersRouter.js');
const budgetRouter = require('./api/budgetRouter.js');

router.use('/users', userRouter);
router.use('/budgets', budgetRouter);

module.exports = router;
