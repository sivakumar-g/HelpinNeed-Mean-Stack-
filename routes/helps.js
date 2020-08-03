const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

// var { help } = require('../models/help');


const help  = require('../models/help');


router.post('/newhelp', (req, res) => {
    var newhelp = new help({
        name: req.body.name,
        title: req.body.title,
        description: req.body.description,
        contact: req.body.contact,
        location: req.body.location,
        address: req.body.address
    });
    help.addhelp(newhelp, (err, user) => {
        if(err){
          res.json({success: false, msg:'Failed to add help request   '+err});
        } else {
          res.json({success: true, msg:'help added', user});
        }
      });
});

router.post('/gethelpdata',(req,res)=>
{
  help.find({
    location: {
     $near: {
      $maxDistance: 1000,
      $geometry: {
       type: "Point",
       coordinates:[78.6568942, 11.127122499999999]
       // [req.body.longitude, req.body.latitude]
       // [-110.8571443, 32.4586858]
      }
     }
    }
   }).find((error, results) => {
    if (!error){
      res.send(results);
    } 
    else {
    console.log(error);
    }
    //console.log(JSON.stringify(results, 0, 2));
   });
}



)

module.exports = router;