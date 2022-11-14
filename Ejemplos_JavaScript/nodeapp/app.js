 var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { isAPIRequest } = require('./lib/utils');
const swaggerMiddleware = require('./lib/swaggerMiddleware');

var app = express();

require('./lib/connectMongoose');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.locals.title = 'NodeApp'; // todas las vistas tienen disponible esto

/*
Middlewares de nuestra aplicacion
los evalua Express ante cada petuicion que recibe
*/
app.use(logger('dev'));//middleware de log, cada vez que recargas la pagina se muestra en consola la info, si lo quitas no
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //parchea las peticiones tipo urlcoded
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // middleware de estaticos, busca el fichero
app.use('/api-docs', swaggerMiddleware);


//Rutas de mi API

app.use('/api/agentes', require('./routes/api/agentes'));

/*
rutas de mi website
*/
app.use('/',      require('./routes/index'));
app.use('/users', require('./routes/users'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // gestionando error de validacion
  if (err.array) {
    //error de validacion
    err.status = 422;
    const errInfo = err.array({ onlyFirstError: true })[0];
    err.message = `${errInfo.mparam} - ${errInfo.param} `;
  }
  res.status(err.status || 500);
  // si es un error ene l API respondo JSON

  if (isAPIRequest(req)) {
    res.json({error: err.message });
    return;
  }

  // gestionando error de validacion
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  
  res.render('error');
});



module.exports = app;











