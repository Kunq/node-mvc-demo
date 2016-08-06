var express = require('express');
var router = express.Router();                                   

/* 
 * Basicsearch GET page
 */
router.get('/rating', function(req, res, next) {
  var db = req.mongodb;
  res.render('restaurantrating', {title: "Restaurant Rating"});
});

router.post('/rating/insert', function(req, res, next){
  /*
  *   Insert res.body data to mongodb
  */
  var db = req.mongodb;
  // res.redirect('/');
});

router.post('/rating/update', function(req, res, next){
  /*
  *   Update  
  */
  var db = req.mongodb;
  // res.redirect('/');
});

router.post('/rating/delete', function(req, res, next){
  /*
  *   Delete
  */
  var db = req.mongodb;
  // res.redirect('/');
});

module.exports = router;

