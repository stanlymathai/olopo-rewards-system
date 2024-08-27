const router = require('express').Router();
const handler = require('../controllers/points.controller');

router.post('/add', handler.addPoints);
router.post('/redeem', handler.redeemPoints);
router.post('/purchase', handler.purchasePoints);
router.post('/encash', handler.encashPoints);

module.exports = router;
