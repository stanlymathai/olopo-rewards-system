const router = require('express').Router();
const handler = require('../controllers/accrual.controller');

router.post('/', handler.accruePoints);

module.exports = router;
