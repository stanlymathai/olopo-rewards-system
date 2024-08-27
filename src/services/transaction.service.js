const Ledger = require('../models/ledger.model');

function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}

exports.recordTransaction = async (userId, points, type) => {
  const transaction = new Ledger({
    transactionId: generateUniqueId(), // Generate a unique transaction ID
    userId,
    points,
    type,
  });
  await transaction.save();
  return transaction;
};
