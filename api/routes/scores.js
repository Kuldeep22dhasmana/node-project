const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Score =  require('../models/score');

router.get('/', (req, res, next) => {
Score.find()
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

const score = new Score({
     _id: new mongoose.Types.ObjectId(),
     
    studentname: req.body.studentname,
    mark: req.body.mark,
    subject: req.body.subject,   
    
 });
  score
  .save()
  .then(result => {
      console.log(result);
      
  res.status(201).json  ({
    message: 'HANDLING POST REQUEST TO /scores',
  createdScore: result

});
  })
  .catch(err =>   {
      console.log(err)
      res.status(500).json({
          error: err 
      
    });

  });
});

router.get('/:scoreID', ( req, res, next) => {
const id = req.params.scoreID;
Score.findById(id)
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

router.delete('/:scoreID', (req, res, next) => {
const id = req.params.scoreID;
Score.findById(id)
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