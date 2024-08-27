const User = require('../models/user.model');

async function createUser(userData) {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (error) {
    console.error('Error creating user:', error.message || error);
    throw new Error('Failed to create a user');
  }
}

async function getUserById(userId) {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    console.error('Error fetching user:', error.message || error);
    throw new Error('Error fetching user');
  }
}

async function listUsers() {
  try {
    const users = await User.find({});
    return users;
  } catch (error) {
    console.error('Error fetching users:', error.message || error);
    throw new Error('Error fetching users');
  }
}

module.exports = {
  createUser,
  getUserById,
  listUsers,
};
