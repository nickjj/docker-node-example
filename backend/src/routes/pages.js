const express = require('express');

const expressPackage = require('express/package');

const router = express.Router();

const redis = require('../redis');
const knex = require('../knex');

router.get('/', (req, res) => {
  res.render('pages/index', {
    express_ver: expressPackage.version,
    node_ver: process.env.NODE_VERSION,
    node_env: process.env.NODE_ENV,
    title: 'Docker + Node',
  });
});

router.get('/up', (req, res) => {
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
