const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Subject = require('../models/subject');

router.get('/', (req, res, next) => {
    Subject.find()
  .exec()
  .then(doc => {
       console.log(doc);
       res.status(200).json(doc);
  })  
  .catch(err => {
      console.log(err);
      res.status(200).json({err: error});
  });
});

router.post('/', (req, res, next) => {
    const subject = new Subject({
        _id: new mongoose.Types.ObjectId(),
        subjectname: req.body.subjectname,
        subjectcode: req.body.subjectcode,
        unitid: req.body.unitid

    });
    subject
  .save()
  .then(result => {
    console.log(result);
      
  res.status(201).json  ({
    message: 'HANDLING POST REQUEST TO /subjects',
  createdSubject: result

});
  })
  .catch(err =>   {
      console.log(err)
      res.status(500).json({
          error: err 
      
    });

  });
});

router.get('/:subjectID', ( req, res, next) => {
    const id = req.params.subjectID;
    Subject.findById(id)
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
    
    router.delete('/:subjectID', (req, res, next) => {
    const id = req.params.subjectID;
    Subject.findById(id)
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

    router.put('/:subjectID', ( req, res, next) => {
  const id = req.params.subjectID;
  const subject = Subject.updateOne({_id:id},{ $set : {subjectname:req.body.subjectname , subjectcode: req.body.subjectcode , unitid: req.body.unitid }})
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