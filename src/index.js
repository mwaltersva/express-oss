const express = require('express');
const rp = require('request-promise');
const Promise = require('bluebird');
const bodyParser = require('body-parser');

const postsRouter = require('./api/posts');

const app = express();
app.use(bodyParser.json());

app.use('/posts', postsRouter);

app.listen(3000);
