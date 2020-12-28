const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Course =  require('../models/course');

router.get('/', (req, res, next) => {
Course.find()
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

const course = new Course({
     _id: new mongoose.Types.ObjectId(),
     
    name: req.body.name,
    totalstudent: req.body.totalstudent,
    duration: req.body.duration,   
    
 });
  course
  .save()
  .then(result => {
      console.log(result);
      
  res.status(201).json  ({
    message: 'HANDLING POST REQUEST TO /courses',
  createdCourse: result

});
  })
  .catch(err =>   {
      console.log(err)
      res.status(500).json({
          error: err 
      
    });

  });
});

router.get('/:courseID', ( req, res, next) => {
const id = req.params.courseID;
Course.findById(id)
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

router.delete('/:courseID', (req, res, next) => {
const id = req.params.courseID;
Course.findById(id)
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

module.exports = router;