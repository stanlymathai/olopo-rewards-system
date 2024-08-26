const express = require('express');
const { allocateInitialPoints } = require('../controllers/admin.controller');
const router = express.Router();

router.post('/points/allocate', allocateInitialPoints);

module.exports = router;
