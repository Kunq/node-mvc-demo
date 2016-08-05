var express = require('express');
var router = express.Router();                                   
var mongo = require('mongodb').MongoClient;

/* 
 * Basicsearch GET page
 */
router.get('/rating', function(req, res, next) {
  res.render('restaurantrating', {title: "Restaurant Rating"});
});

router.post('/rating/insert', function(req, res, next){
  /*
  *   Insert res.body data to mongodb
  */
  // res.redirect('/');
});

router.post('/rating/update', function(req, res, next){
  /*
  *   Update  
  */
  // res.redirect('/');
});

router.post('/rating/delete', function(req, res, next){
  /*
  *   Delete
  */
  // res.redirect('/');
});

module.exports = router;

