const User = require('../../models/User');

const getUsers = async (req, res) => {
  try {
    const users = await User.getUsers();
    res.status(200).json(users);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

const addUser = async (req, res) => {
  try {
    const addedUser = await User.addUser('test', 'test@gmail.com', '1234');
    res.status(200).json(addedUser);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.getUser(req.params.id);
    res.status(200).json(user);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

module.exports = {
  getUsers,
  addUser,
  getUser
};
