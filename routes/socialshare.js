var express = require('express');
var router = express.Router();                                   

/* 
 * Basicsearch GET page
 */
router.get('/', function(req, res, next) {
  var db = req.mongodb;
  res.render('socialshare', {title: "Social Share"});
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
