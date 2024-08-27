const router = require('express').Router();
const route = require('./points.route');

function healthRoute(_, res) {
  return res.status(200).send('As Strong an an Ox!');
}

router.get('/health', healthRoute);

router.use('/points', route);

module.exports = router;
