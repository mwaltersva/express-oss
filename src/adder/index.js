const router = require('express').Router();

router
    .route('/')
    .all(adderController);

module.exports = router;

function adderController(req, res, next) {
  // Look for nums in the request body. If there are none, try the query string
  let nums = req.body.nums || req.query.nums;

  // Throw an error if we didn't find any numbers or if it wasn't an array
  if (!nums || !nums instanceof Array) {
    return next(new Error('Where are the nums?!'));
  }

  // Add them numbers
  let sum = nums.reduce((memo, num) => Number(memo) + Number(num));

  // Give 'em the answer
  res.status(200);
  return res.send(String(sum));
}
