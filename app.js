const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const HttpStatus = require('http-status-codes');

const indexRouter = require('./routes/index-route');
const usersRouter = require('./routes/users-route');
const charactersRouter = require('./routes/characters-route');
const storiesRouter = require('./routes/stories-route');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', usersRouter);
app.use('/api/characters', charactersRouter);
app.use('/api/stories', storiesRouter);
app.use('*', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(HttpStatus.NOT_FOUND));
});

// error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || HttpStatus.INTERNAL_SERVER_ERROR);
    res.render('error');
});

module.exports = app;
