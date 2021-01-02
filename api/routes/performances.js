const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Performance = require('../models/performance');

router.get('/', (req, res, next) => {
    Performance.find()
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
    const performance = new Performance ({
        _id: new mongoose.Types.ObjectId(),
        studentid: req.body.studentid,
        teacherid: req.body.teacherid,
        subjectid: req.body.subjectid,
        marks: req.body.marks
    });
    performance
    .save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'HANDLING POST REQUEST TO/performances',
            createdPerformance: result
        });
    })    
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.get('/:performanceID', (req, res, next) => {
    const id = req.params.performanceID;
    Performance.findById(id)
    .exec()
    .then(doc => {
        console.log('FROM DATABASE', doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.delete('/:performanceID', (req, res, next) => {
    const id = req.params.performanceID;
    Performance.findById(id)
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

router.put('/:performanceID', ( req, res, next) => {
    const id = req.params.performanceID;
    const performance = Performance.updateOne({_id:id},{ $set : {studentid:req.body.studentid}  })
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