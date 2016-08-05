var express = require('express');
var router = express.Router();                                   
var mongo = require('mongodb').MongoClient;

/* 
 * Basicsearch GET page
 */
router.get('/', function(req, res, next) {
  res.render('advancesearch', {title: "Advanced Search"});
});
/* 
 * GET by params 
 */

router.get('/:id', function(req, res, next) {
  res.render('advancesearch', {title: "Advanced Search", id: req.params.id});
});

router.post('/insert', function(req, res, next){
  /*
  *   Insert 
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