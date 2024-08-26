const { allocateInitialPoints } = require('../services/points.service');

exports.allocateInitialPoints = async (req, res) => {
  try {
    const { userId, points } = req.body;
    const user = await allocateInitialPoints(userId, points);
    res.status(200).json({ message: 'Points allocated', user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
