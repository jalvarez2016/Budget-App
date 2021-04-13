const User = require('../../models/User');

const getUsers = async (req, res) => {
  try {
    const users = await User.getUsers();
    res.status(200).json({ msg: 'All users returned successfully', data: users });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const addUser = async (req, res) => {
  try {
    const addedUser = await User.addUser(
      req.body.firstname,
      req.body.lastname,
      req.body.email,
      req.body.birthday,
      req.body.encrypted_password
    );
    res.status(200).json({ msg: 'User created successfully', data: addedUser });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.updateUser(
      req.params.id,
      req.body.firstname,
      req.body.lastname,
      req.body.email,
      req.body.birthday,
      req.body.encrypted_password
    );
    res.status(200).json({ msg: `User id:${req.params.id} updated successfully`, data: updatedUser });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.removeUser(req.params.id);
    res.status(200).json({ msg: `User id:${req.params.id} deleted successfully` });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.getUser(req.params.id);
    res.status(200).json(user);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

module.exports = {
  getUsers,
  addUser,
  deleteUser,
  updateUser,
  getUser
};
