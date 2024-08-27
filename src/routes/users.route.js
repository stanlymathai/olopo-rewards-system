const router = require('express').Router();

const handler = require('../controllers/user.controller');

router.post('/', handler.createUser);
router.get('/', handler.listUsers);

module.exports = router;
