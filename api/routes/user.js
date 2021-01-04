const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const User = require('../models/user');
const user = require("../models/user");
const { json } = require("body-parser");


router.post("/signup", (req, res, next) => {
 User.find({email: req.body.email})
 .exec()
 .then(user => {
     if(user.length >= 1) {
        return res.status(409).json ({
           message: 'Mail Exists'
        });
     } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
         if (err) {
         return res.status(500).json({
         errror: err
          });
       } else {
         const user = new User ({
         _id: new mongoose.Types.ObjectId(),
         email: req.body.email,
         password: hash
        });
               user
               .save()
               .then(result => {
               console.log(result);
               res.status(201).json ({
               message: "User Created"
               });
           })
               .catch(err =>  {
               console.log(err);
                res.status(500).json({
                error: err
                }); 
             });
            }
        });
     }
   });
});

router.post("/login", (req, res, next) => {
   User.find({ email: req.body,email })
    .exec()
    .then( user => {
    if (user.length < 1) {
       return res.status(404).json({
          message: 'Auth Failed'
         });
     }
    bcrypt.compare(req.body.password, user[0].password, (err, result) => {
         if (err) {
            return res.status(401).json({
               message: 'AUTH FAILED'
            });
         }
         if (result)  {
            return res.status(200),json({
               message: 'AUTH SUCCESSFUL'
            });
         }
         res.status(401).json({
            message: 'AUTH FAILED'
         });
      });  
   }) 
   .catch(err => {
      console.log(err);
      res.status(500).json({
         error: err
      });
   });
});


router.delete('/:userID', (req, res, next) => {

   User.remove({ _id: req.params.userID })
   .exec()
   .then(result => {
       res.status(200).json({
          message: 'User Deleted'
         });
   })
   .catch(err => {
        console.log(err); 
        res.status(500).json({
           error: err
         });
   });
});
 
module.exports = router;