
var express = require('express');
var path = require('path');
var stormpath = require('express-stormpath');
var bodyParser = require('body-parser');
var logger = require('./utils/logger');
var session = require('client-sessions');
var MongoClient = require('mongodb').MongoClient;

var routes = require('./routes/index');
var basicsearch = require('./routes/basicsearch');
var advancesearch = require('./routes/advancesearch');
var socialshare = require('./routes/socialshare');
var restaurant = require('./routes/restaurant');

/**
 * Create the Express application.
 */
var app = express();
var config = require('./config.json')[app.get('env')];
var mongodb = config.mongodb;
/**
 * Application settings.
 */
app.set('trust proxy',true);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.locals.siteName = 'Express-Stormpath';

/*
 * Initialize MongoDB connection pool
 */
var db;
MongoClient.connect(config.mongodb, function(err, database) {
  if(err) throw err;
  logger.info("Initiate MongoDB connection pool.");
  logger.info("database: " + database);
  db = database;
});

app.get('/logout', function(req, res) {
  req.session.reset();
  res.redirect('/');
});

/**
 * Stormpath initialization.
 */
app.use(stormpath.init(app, {
  website: true,
  apikey:{
  	id: process.env['STORMPATH_API_KEY_ID'],
  	secret: process.env['STORMPATH_API_KEY_SECRET']
	}	 
}));
logger.info('Initializing Stormpath');

/*
* Client Session Settings
*/
app.use(session({
  cookieName: 'session',
  secret: 'tgl6xmRbZhcYU60', //a random_string_goes_here
  duration: 30 * 60 * 1000, //defines how long the session will live in milliseconds
  activeDuration: 5 * 60 * 1000, //allows users to lengthen their session by interacting with the site. 
  httpOnly: true, //prevents browser JavaScript from accessing cookies
  secure: true, //ensures cookies are only used over HTTPS
  ephemeral: true //deletes the cookie when the browser is closed
}));

/*
 * Global variables for middleware
 */
app.use(function(req, res, next){
  res.locals.mongodb = db;
  next();
});


/**
 * Route initialization.
 */
app.use('/', routes);
app.use('/basicsearch', basicsearch);
app.use('/advancesearch', advancesearch);
app.use('/socialshare', socialshare);
app.use('/restaurant', restaurant);


app.on('stormpath.ready',function () {
  logger.info('Stormpath Ready');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Page Not Found');
  err.status = 404;
  next(err);
});

logger.info('environment ' + app.get('env'));

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    if (err.status == '404') {
    	res.render('404', {
              message: err.message,
              error: err
    	});
    } else {	
        res.render('error', {
          message: err.message,
          error: err.stacktrace
	  });
   }
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  if (err.status == '404') {
	  res.render('404', {
    message: err.message,
    error: {} 
	});
  } else {	
     res.render('error', {
     message: err.message,
     error: {} 
	});
  }
});



  /**
   * Start the web server.
   */
  var port = config.port;
  app.listen(port, function () {
    logger.info('Server listening on http://localhost:' + port);
  });



