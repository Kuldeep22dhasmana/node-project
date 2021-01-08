const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require('../models/user');
const jwt = require('jsonwebtoken');


exports.user_signup = (req, res, next) => {
    User.find({email: req.body.email})
    .exec()
    .then(user => {
        if(user.length >= 1) {
           console.log("entered length");
           return res.status(409).json ({
              message: 'Mail Exists'
           });
        } else {
           console.log("entered else");
           console.log(req.body.password)
         bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
            return res.status(500).json({
            errror: err
             });
          } else {
             console.log("password hash");
            const user = new User ({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            password: hash
           });
                  user
                  .save()
                  .then(result => {
                  console.log(result);
                  console.log("user created");
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
   };

   exports.user_login = (req, res, next) => {
    User.find({ email: req.body.email })
     .exec()
     .then( user => {
     if (user.length < 1) {
        return res.status(401).json({
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
             const token = jwt.sign(
             {
                email: user[0].email,
                userID: user[0]._id
             },
             process.env.JWT_KEY,
             {
              expiresIn: "1h"
              }
             );
             return res.status(200).json({
                message: 'AUTH SUCCESSFUL',
                token : token
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
 };

 exports.user_delete = (req, res, next) => {

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
 };