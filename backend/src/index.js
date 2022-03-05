const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

const app = express();
const pages = require('./routes/pages');
const up = require('./routes/up');
const config = require('../config');
const redis = require('./redis');

app.use(morgan('common'));

app.use(
  session({
    store: new RedisStore({ client: redis }),
    secret: config.express.secret,
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(express.static('../public'));

app.use(expressLayouts);
app.set('layout', './layouts/app');
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/up/', up);
app.use('/', pages);

module.exports = app;
