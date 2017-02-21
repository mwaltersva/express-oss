const router = require('express').Router();

router
    .route('/')
    .all(adderController);

module.exports = router;

function adderController(req, res, next) {
  let nums = req.body.nums || req.query.nums;

  if (!nums || !nums instanceof Array) {
    return next(new Error('Where are the nums?!'));
  }

  let sum = nums.reduce((memo, num) => Number(memo) + Number(num));

  res.status(200);
  return res.send(String(sum));
}
