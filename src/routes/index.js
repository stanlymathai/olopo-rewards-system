const router = require('express').Router();

const userRoute = require('./users.route');
const pointsRoute = require('./points.route');
const accrualRoute = require('./accrual.route');

function healthRoute(_, res) {
  return res.status(200).send('As Strong an an Ox!');
}

router.get('/health', healthRoute);

router.use('/users', userRoute);
router.use('/points', pointsRoute);
router.use('/accrual', accrualRoute);

module.exports = router;
