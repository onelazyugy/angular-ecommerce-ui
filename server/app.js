
// -------------------------------------------------
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var proxy = require('http-proxy-middleware');
var bodyParser = require('body-parser');
var cors = require('cors');
// var corsHandler = require('./middleware/cors-handler')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// HOST=hppt://xxx:<port> npm run start
// white listing the host
console.log('WHITE LISTING HOST: ', process.env.HOST);
app.use(cors({credentials: true, origin: process.env.HOST}));


// proxy to java backend service
app.use(
  // '/backend/api/*',
  '/ecommerce/*',
  proxy({ 
      target: 'http://localhost:8181', 
      changeOrigin: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
);
//------------------------

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser);


// CORS
// app.get('/backend/api/v1/angular', function(req, res, next){
//   console.log('RESPONSE: ', res);
// });
//------------------------

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
