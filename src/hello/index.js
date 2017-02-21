// Example of a route that serves a template
const router = require('express').Router();

router
    .route('/')
    .get(helloGetController);

module.exports = router;

function helloGetController(req, res) {
  // Create the data model for use in the template
  const model = {
    title: 'Hey there!',
    message: 'Hello from the hello route!'
  };

  // Render and send the template
  return res.render('hello', model);
}
