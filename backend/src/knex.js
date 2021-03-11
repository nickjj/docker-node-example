const knexfile = require('../knexfile.js');
const knex = require('knex')(knexfile); // eslint-disable-line import/order

module.exports = knex;
