
var express = require('express');
var router = express.Router();                                   
var mongo = require('mongodb').MongoClient;

/* 
 * Basicsearch GET page
 */

router.get('/', function(req, res, next) {
  res.render('basicsearch', {title: "Basic search"});
});

router.post('/insert', function(req, res, next){
  /*
  *   Insert res.body data to mongodb
  */
  // res.redirect('/');
});

router.post('/update', function(req, res, next){
  /*
  *   Update  
  */
  // res.redirect('/');
});

router.post('/delete', function(req, res, next){
  /*
  *   Delete
  */
  // res.redirect('/');
});

module.exports = router;