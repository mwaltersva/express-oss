const express = require('express'); // Load the express framework
const bodyParser = require('body-parser'); // Module for parsing request bodies
const path = require('path');

// Load our modules
const helloRouter = require('./hello');
const adderRouter = require('./adder');
const postsRouter = require('./api/posts');

const app = express(); // Create the application
app.use(bodyParser.json()); // Register the JSON body parsing middleware
app.use(bodyParser.urlencoded({extended: true})); // Register the form-urlencoded body parsing middleware
app.set('view engine', 'pug'); // Register the pug template library
app.set('views', path.join(__dirname, 'views')); // Register the views directory

/**
 * Register our middleware. Requests sent to localhost:3000/hello will first call the above
 * middleware and then call the helloRouter middleware. Middleware is called in the order in which
 * it was registered.
 */
app.use('/hello', helloRouter);
app.use('/adder', adderRouter);
app.use('/posts', postsRouter);

/**
 * A route defined with a regular expression. Matches "/" exactly. If ^/$ was not used, this would
 * match all routes destined for the 404 route below, since all valid URLS would start with "/"
 */
app.use(/^\/$/, (req, res) => {
  res.send('Hello world!');
});

/**
 * A catch all 404 route. If no other route is matched, this route/middleware will be used.
 */
app.use('*', (req, res) => {
  res.status(404);
  res.send('Couldn\'t find it!');
});

/**
 * Error handling middleware comes last, and accepts an Error as the first argument.
 * Gets called if next() is called with an error as the argument
 */
app.use((err, req, res, next) => {
  res.status(500);
  res.send(err);
});

// Start the application listening for requests on port 3000
app.listen(3000);
