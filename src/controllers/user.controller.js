const User = require('../models/user.model');

exports.addPoints = async (req, res) => {
  const { userId, points } = req.body;
  // Logic to add points
};

exports.redeemPoints = async (req, res) => {
  const { userId, points } = req.body;
  // Logic to redeem points
};
