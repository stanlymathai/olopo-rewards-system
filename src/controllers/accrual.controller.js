const { accruePoints } = require('../services/accrual.service');

exports.accruePoints = async (req, res) => {
  try {
    console.log("hello from 'accruePoints'", req.body);
    const { userId, points, source } = req.body;
    const user = await accruePoints(userId, points, source);
    res.status(200).json({ message: 'Points accrued', user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
