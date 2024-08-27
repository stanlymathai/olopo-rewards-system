const userService = require('../services/user.service');

async function createUser(req, res) {
  try {
    const userData = req.body;

    const user = await userService.createUser(userData);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message || 'Error creating user' });
  }
}

async function listUsers(req, res) {
  try {
    const users = await userService.listUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message || 'Failed to fetch users' });
  }
}

module.exports = {
  createUser,
  listUsers,
};
