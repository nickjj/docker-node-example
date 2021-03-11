const config = require('./config/index');

const common = {
  client: 'pg',
  connection: process.env.DATABASE_URL || config.pg,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './db/migrations',
  },
};

module.exports = common;
