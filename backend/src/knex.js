const knexfile = require('../knexfile');
const knex = require('knex')(knexfile); // eslint-disable-line import/order

module.exports = knex;
