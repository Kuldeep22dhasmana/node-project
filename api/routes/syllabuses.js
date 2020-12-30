const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Syllabus = require('../models/syllabus');

router.get('/', (req, res, next) => {
    Syllabus.find()
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
    const syllabus = new Syllabus({
        _id: new mongoose.Types.ObjectId(),
        subjectid: req.body.subjectid,
        marks: req.body.marks,
        time: req.body.time

    });
    syllabus
  .save()
  .then(result => {
    console.log(result);
      
  res.status(201).json  ({
    message: 'HANDLING POST REQUEST TO /syllabuses',
  createdSyllabus: result

});
  })
  .catch(err =>   {
      console.log(err)
      res.status(500).json({
          error: err 
      
    });

  });
});

router.get('/:syllabusID', ( req, res, next) => {
    const id = req.params.syllabusID;
    Syllabus.findById(id)
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
    
    router.delete('/:syllabusID', (req, res, next) => {
    const id = req.params.syllabusID;
    Syllabus.findById(id)
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

    router.put('/:syllabusID', ( req, res, next) => {
  const id = req.params.syllabusID;
  const syllabus = Syllabus.updateOne({_id:id},{ $set : {marks:req.body.marks}})
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