var express = require('express');
var router = express.Router();                                   

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
