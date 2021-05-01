require('dotenv').config()

const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// cors handling
const allowlist = process.env.CORS_WHITELIST;
const corsOptionsDelegate = function (req, res) {
  let corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    // reflect (enable) the requested origin in the CORS response
    corsOptions = { origin: true }
  } else {
    // disable CORS for this request
    corsOptions = { origin: false }
  }
  res(null, corsOptions)
}

// apply cors middleware
app.use(cors(corsOptionsDelegate));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

// TODO: add lint
