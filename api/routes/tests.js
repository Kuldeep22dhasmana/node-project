const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Test =  require('../models/test');

router.get('/', (req, res, next) => {
Test.find()
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

const test = new Test({
     _id: new mongoose.Types.ObjectId(),
     subjectid: req.body.subjectid,
     teacherid: req.body.teacherid,
     time: req.body.time,
     marks: req.body.marks
 });
  test
  .save()
  .then(result => {
      console.log(result);
      
  res.status(201).json  ({
    message: 'HANDLING POST REQUEST TO /tests',
    createdTest: result

});
  })
  .catch(err =>   {
      console.log(err)
      res.status(500).json({
          error: err 
      
    });

  });
});

router.get('/:testID', ( req, res, next) => {
const id = req.params.testID;
Test.findById(id)
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

router.delete('/:testID', (req, res, next) => {
const id = req.params.testID;
Test.findById(id)
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

router.put('/:testID', ( req, res, next) => {
    const id = req.params.testtID;
    const test = Test.updateMany({_id:id},{ $set : {marks:req.body.marks} , })
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