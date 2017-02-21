const router = require('express').Router();

router
    .route('/')
    .get(helloGetController);

module.exports = router;

function helloGetController(req, res) {
  const model = {
    title: 'Hey there!',
    message: 'Hello from the hello route!'
  };

  return res.render('hello', model);
}
