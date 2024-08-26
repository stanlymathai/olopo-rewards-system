const User = require('../models/user.model');

// Initialize system points
let totalPoints = 1000000; // Example initial allocation

exports.getInitialPoints = () => {
  return totalPoints;
};

exports.allocateInitialPoints = async (userId, points) => {
  const user = await User.findById(userId);
  if (user) {
    user.points += points;
    await user.save();
    totalPoints -= points;
    return user;
  }
  throw new Error('User not found');
};

exports.purchasePoints = async (userId, points, currency) => {
  // Example conversion rate logic
  const conversionRate = getConversionRate(currency);
  const pointsToAdd = points * conversionRate;

  const user = await User.findById(userId);
  if (user) {
    user.points += pointsToAdd;
    await user.save();
    totalPoints += pointsToAdd;
    return user;
  }
  throw new Error('User not found');
};

function getConversionRate(currency) {
  // Implement actual conversion logic here
  return 1; // Example: 1 unit of currency equals 1 point
}

exports.encashPoints = async (userId, points) => {
  const user = await User.findById(userId);
  if (user && user.points >= points) {
    user.points -= points;
    await user.save();
    totalPoints -= points;
    return user;
  }
  throw new Error('Insufficient points or user not found');
};
