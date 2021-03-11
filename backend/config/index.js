const config = module.exports;

config.express = {
  port: process.env.PORT || 8000,
  secret: process.env.SECRET_KEY,
};

config.pg = {
  user: process.env.POSTGRES_USER || 'hello',
  password: process.env.POSTGRES_PASSWORD || 'password',
  host: process.env.POSTGRES_HOST || 'postgres',
  port: process.env.POSTGRES_PORT || '5432',
  database: process.env.POSTGRES_DB || 'hello',
};

config.redis = {
  url: process.env.REDIS_URL || 'redis://redis:6379/0',
};
