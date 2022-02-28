const cookieParser = require('cookie-parser');
const logger = require('morgan');
const express = require('express'); // import the library
const todoRouter = require('./routes/todoRoutes'); // import the router module
const cors = require('cors');

const app = express(); // create the express object

// server configuration
app.use((err, req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next(err);
});
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/todos', todoRouter); // load the router module

module.exports = app
