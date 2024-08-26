const Transaction = require('../models/transaction.model');
const User = require('../models/user.model');

exports.redeemPoints = async (userId, points, redemptionType) => {
  const user = await User.findById(userId);
  if (user && user.points >= points) {
    user.points -= points;
    await user.save();

    // Log the transaction
    const transaction = new Transaction({
      userId,
      type: 'redemption',
      points,
      redemptionType,
    });
    await transaction.save();

    return user;
  }
  throw new Error('Insufficient points or user not found');
};
