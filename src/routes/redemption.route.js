const express = require('express');
const router = express.Router();

const { redeemPoints } = require('../controllers/redemption.controller');

router.post('/redeem', redeemPoints);

module.exports = router;
