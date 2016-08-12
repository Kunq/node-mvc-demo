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
  res.render('advancesearch', {title: "Advanced Search"});
});
/* 
 * GET by params 
 */

router.get('/:id', function(req, res, next) {
  var db = req.mongodb;
  res.render('advancesearch', {title: "Advanced Search", id: req.params.id});
});

router.post('/insert', function(req, res, next){
  /*
  *   Insert 
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
