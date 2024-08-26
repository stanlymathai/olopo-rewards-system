const express = require('express');
const router = express.Router();

const { addPoints, redeemPoints } = require('../controllers/user.controller');
const { purchasePoints } = require('../controllers/user.controller');
const { encashPoints } = require('../controllers/user.controller');

router.post('/points/add', addPoints);
router.post('/points/redeem', redeemPoints);
router.post('/points/purchase', purchasePoints);
router.post('/points/encash', encashPoints);

module.exports = router;
