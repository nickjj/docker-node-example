const express = require('express');

const router = express.Router();

const redis = require('../redis');
const knex = require('../knex');

router.get('/', (req, res) => {
  res.send('');
});

router.get('/databases', (req, res) => {
  redis.ping();

  knex.raw('SELECT 1')
    .then(() => {
      res.send('');
    })
    .catch(() => {
      res.status(500);
      res.send('');
    });
});

module.exports = router;
