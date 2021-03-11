const redis = require('redis');
const config = require('../config/index');

const client = redis.createClient(config.redis);

module.exports = client;
