const express = require('express');

const expressPackage = require('express/package');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/index', {
    express_ver: expressPackage.version,
    node_ver: process.env.NODE_VERSION,
    node_env: process.env.NODE_ENV,
    title: 'Docker + Node',
  });
});

module.exports = router;
