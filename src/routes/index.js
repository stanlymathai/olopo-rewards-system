const router = require('express').Router();

const pointsRoute = require('./points.route');
const accrualRoute = require('./accrual.route');

function healthRoute(_, res) {
  return res.status(200).send('As Strong an an Ox!');
}

router.get('/health', healthRoute);

router.use('/points', pointsRoute);
router.use('/accrual', accrualRoute);

module.exports = router;
