
var express = require('express');
var stormpath = require('express-stormpath');
var logger = require('../utils/logger');
var router = express.Router();
// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017/platerate';


//Initialize connection once
// MongoClient.connect(url, function(err, database) {
//    if(err) throw err;
//      console.log("Connected correctly to server.");
//    db = database;
//  });


/**
 * Home page: load profile 
 */
router.get('/', stormpath.loginRequired, function(req, res) {
// MongoClient.connect(url, function(err, database) {
//    if(err) throw err;
//      console.log("Connected correctly to server.");
//    db = database;
//  });

  var db = req.mongodb;
  var userInfo = [];
  req.session.user = req.user;
  db.collection('profile').findOne({'href': req.user.href})
  .then(function(data){
    if (data === null) {
      db.collection('profile').insertOne(req.user);
      logger.info('user interted');
     }
    else{
      userInfo = [
        { street: data.Street       },
        { city: data.City           },
        { postalCode: data.PostalCode },
        { country: data.Country     },
        { phone: data.Phone         },
        { bday: data.Birthday       },
        { tasteProfile: data.GuruTasterProfile},
        { dietaryPreferences: data.DietaryPreferences}
      ];
    } 
    res.render('index', {title: "Profile", user: userInfo, error: req.session.errors});
    req.session.errors = null;

  })
  .catch(function(error){
    logger.error(error);
  });
});


/**
 * Update Profile.
 * OK with: router.post('/profile/update'), function(req, res){}
 */

router.post('/', function(req, res) {
  var db = res.locals.mongodb;
    db.collection('profile').updateOne(
      {"email": email},
        { $set:
          {
            "Street": updatedProfile.street,
            "City": updatedProfile.city,
            "PostalCode": updatedProfile.postal,
            "Country": updatedProfile.country,
            "Phone": updatedProfile.phone,
            "Birthday": updatedProfile.datepicker,
            "GuruTasterProfile":
               {
                  "Sweet": updatedProfile.sweet,
                  "Salty": updatedProfile.salty,
                  "Savory": updatedProfile.savory,
                  "Bitter": updatedProfile.bitter,
                  "Sour": updatedProfile.sour,
                  "Spicy": updatedProfile.spicy,
                  "Presentation": updatedProfile.presentation,
                  "Quantity": updatedProfile.quantity,
                  "ServiceRating": updatedProfile.service_rating,
                  "ClassyAmbience": updatedProfile.classy_ambience,
                  "NoiseLevel": updatedProfile.noise_level,
                  "ValueForPricing": updatedProfile.value_for_price
               },
                 "DietaryPreferences": selectedDiets
             }
          }, // end of set
          {
            upsert: false 
          }
      ) //End of Update
      .catch(function(error){
        logger.info(error);
      });
    res.redirect('/basicsearch');
});


module.exports = router;
