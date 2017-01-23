const express = require('express');
const rp = require('request-promise');

const router = express.Router();

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

router
    .route('/')
    .get(postsGetController)
    .post(postsPostController);

router
    .route('/:id')
    .get(postsIdGetController)
    .put(postsIdPutController)
    .delete(postsIdDeleteController);

module.exports = router;

function postsGetController(req, res, next) {
  rp({ url: apiUrl, json: true})
      .then(rpResponse => res.json(rpResponse))
      .catch(err => next(err));
}

function postsPostController(req, res, next) {
  rp({
    method: 'POST',
    url: apiUrl,
    body: req.body,
    json: true
  })
      .then(rpResponse => res.json(rpResponse))
      .catch(err => next(err));
}

function postsIdGetController(req, res, next) {
  rp({ url: `${apiUrl}/${req.params.id}`, json: true})
      .then(rpResponse => res.json(rpResponse))
      .catch(err => next(err));
}

function postsIdPutController(req, res, next) {
  rp({
    method: 'PUT',
    url: `${apiUrl}/${req.params.id}`,
    body: req.body,
    json: true
  })
      .then(rpResponse => res.json(rpResponse))
      .catch(err => next(err));
}

function postsIdDeleteController(req, res, next) {
  rp({
    method: 'DELETE',
    url: `${apiUrl}/${req.params.id}`,
    body: req.body,
    json: true
  })
      .then(rpResponse => res.json(rpResponse))
      .catch(err => next(err));
}
