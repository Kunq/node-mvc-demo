
var express = require('express');
var router = express.Router();                                   
// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017/platerate';

// //Initialize connection once
// MongoClient.connect(url, function(err, database) {
//    if(err) throw err;
//      console.log("Connected correctly to server.");
//    db = database;
//  });

/* 
 * Basicsearch GET page
 */

router.get('/', function(req, res, next) {
  var db = req.mongodb;
  res.render('basicsearch', {title: "Basic search"});
});

router.post('/insert', function(req, res, next){
  /*
  *   Insert res.body data to mongodb
  */
  var db = req.mongodb;
  // res.redirect('/');
});

router.post('/update', function(req, res, next){
  /*
  *   Update  
  */
  var db = req.mongodb;
  // res.redirect('/');
});

router.post('/delete', function(req, res, next){
  /*
  *   Delete
  */
  var db = req.mongodb;
  // res.redirect('/');
});

module.exports = router;
