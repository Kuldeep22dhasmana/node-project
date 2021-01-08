const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Assignment =  require('../models/assignment');

router.get('/', (req, res, next) => {
Assignment.find()
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

const assignment = new Assignment({
     _id: new mongoose.Types.ObjectId(),
     marks: req.body.marks,
     teacherid: req.body.teacherid,
     name: req.body.name,
     noofquestion : req.body.noofquestion
 });
  assignment
  .save()
  .then(result => {
      console.log(result);
      
  res.status(201).json  ({
    message: 'HANDLING POST REQUEST TO /assignments',
  createdAssignment: result

});
  })
  .catch(err =>   {
      console.log(err)
      res.status(500).json({
          error: err 
      
    });

  });
});

router.get('/:assignmentID', ( req, res, next) => {
const id = req.params.assignmentID;
Assignment.findById(id)
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

router.delete('/:assignmentID', (req, res, next) => {
const id = req.params.assignmentID;
Assignment.findById(id)
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

router.put('/:assignmentID', ( req, res, next) => {
    const id = req.params.assignmentID;
    const assignment = Assignment.updateMany({_id:id},{ $set : { teacherid:req.body.teacheridc , subjectid: req.body.subjectid , time: req.body.time }})
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