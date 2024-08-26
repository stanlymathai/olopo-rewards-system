const express = require('express');
const router = express.Router();

const { accruePoints } = require('../controllers/accrual.controller');

router.post('/accrue', accruePoints);

module.exports = router;
