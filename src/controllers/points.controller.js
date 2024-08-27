const User = require('../models/user.model');
const { purchasePoints } = require('../services/points.service');
const { encashPoints } = require('../services/points.service');

exports.addPoints = async (req, res) => {
  const { userId, points } = req.body;
  // Logic to add points
};

exports.redeemPoints = async (req, res) => {
  const { userId, points } = req.body;
  // Logic to redeem points
};

exports.purchasePoints = async (req, res) => {
  try {
    const { userId, points, currency } = req.body;
    const user = await purchasePoints(userId, points, currency);
    res.status(200).json({ message: 'Points purchased', user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.encashPoints = async (req, res) => {
  try {
    const { userId, points } = req.body;
    const user = await encashPoints(userId, points);
    res.status(200).json({ message: 'Points encashed', user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
