const router = require('express').Router();

router.get('/health', function (_, res) {
  return res.status(200).send('As Strong an an Ox!');
});

router.use('/users', require('./user.route'));

module.exports = router;
