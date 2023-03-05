var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const bookRouter = require('./routes/book');
const borrowerRouter = require('./routes/borrower');

var app = express();

/*const helmet = reiquire('helmet');
const cors = require('cors');

app.use(helmet());
app.use(cors());*/
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/book', bookRouter);
app.use('/borrower', borrowerRouter);

module.exports = app;