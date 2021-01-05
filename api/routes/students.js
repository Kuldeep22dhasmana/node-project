const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Student = require('../models/student');

router.get('/', (req, res, next) => {
Student.find()
.exec()
.then(doc => {
    console.log(doc); 
    res.status(200).json(doc);
})
.catch(err => {
     console.log(err); 
     res.status(500).json({error: err});
});

});

router.post('/', (req, res, next) => {

const student = new Student({
     _id: new mongoose.Types.ObjectId(),
     
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    contact: req.body.contact,
    email: req.body.email
    
 });
  student
  .save()
  .then(result => {
      console.log(result);
      
  res.status(201).json  ({
    message: 'HANDLING POST REQUEST TO /students',
  createdStudent: result

});
  })
  .catch(err =>   {
      console.log(err)
      res.status(500).json({
          error: err 
      
    });

  });
});

router.get('/:studentID', ( req, res, next) => {
const id = req.params.studentID;
Student.findById(id)
.exec()
.then(doc => {
    console.log("FROM DATABASE",doc);
    res.status(200).json(doc);
})
.catch(err => {
     console.log(err); 
     res.status(500).json({error: err});
});
});

router.delete('/:studentID', (req, res, next) => {
const id = req.params.parentID;
Student.findById(id)
.exec()
.then(doc => {
    console.log(doc);
    c = doc.remove()
    res.status(200).json({success: Deleted});
})
.catch(err => {
     console.log(err); 
     res.status(500).json({error: err});
});
});

router.put('/:studentID', ( req, res, next) => {
  const id = req.params.studentID;
  const student = Student.updateOne({_id:id},{ $set : {name:req.body.name , username: req.body.username , password: req.body.password , contact: req.body.contact , email: req.body.email }})
  .exec()
  .then(doc => {
      console.log("FROM DATABASE",doc);
      res.status(200).json(doc);
  })
  .catch(err => {
       console.log(err); 
       res.status(500).json({error: err});
  });
});

module.exports = router;