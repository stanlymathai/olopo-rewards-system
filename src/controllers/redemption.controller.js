const { redeemPoints } = require('../services/redemption.service');

exports.redeemPoints = async (req, res) => {
  try {
    const { userId, points, redemptionType } = req.body;
    const user = await redeemPoints(userId, points, redemptionType);
    res.status(200).json({ message: 'Points redeemed', user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
