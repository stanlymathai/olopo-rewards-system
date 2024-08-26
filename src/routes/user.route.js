const express = require('express');
const { addPoints, redeemPoints } = require('../controllers/user.controller');
const router = express.Router();

router.post('/points/add', addPoints);
router.post('/points/redeem', redeemPoints);

module.exports = router;
