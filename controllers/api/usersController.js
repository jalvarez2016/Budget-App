const bcrypt = require('bcrypt');
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
    bcrypt.hash(req.body.password, 10, async (err, hash) => {
      if (err) throw new Error(err);
      const addedUser = await User.addUser(
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.birthday,
        hash
      );
      res.status(200).json({ msg: 'User created successfully', data: addedUser });
    });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const updateUser = async (req, res) => {
  try {
    req.session.user = Object.assign(req.session.user, req.body);
    console.log(req.session.user);
    const updatedUser = await User.updateUser(
      req.params.id,
      req.body.firstname,
      req.body.lastname,
      req.body.email,
      req.body.birthday
    );
    res.status(200).json({ msg: `User id:${req.params.id} updated successfully`, data: updatedUser });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const changePassword = async (req, res) => {
  try {
    bcrypt.hash(req.body.password, 10, async (err, hash) => {
      if (err) throw new Error(err);
      await User.changePassword(req.params.id, hash);
      res.status(200).json({ msg: `Password for user id:${req.params.id} changed successfully` });
    });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.removeUser(req.params.id);
    req.session.destroy();
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
  changePassword,
  getUser
};
