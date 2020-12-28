const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Fee =  require('../models/fee');

router.get('/', (req, res, next) => {
Fee.find()
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

const fee = new Fee({
     _id: new mongoose.Types.ObjectId(),
     
    studentid: req.body.studentid,
    parentid: req.body.parentid,
    date: req.body.date,
    amount: req.body.amount
    
 });
  fee
  .save()
  .then(result => {
      console.log(result);
      
  res.status(201).json  ({
    message: 'HANDLING POST REQUEST TO /fees',
  createdFee: result

});
  })
  .catch(err =>   {
      console.log(err)
      res.status(500).json({
          error: err 
      
    });

  });
});

router.get('/:feeID', ( req, res, next) => {
const id = req.params.feeID;
Fee.findById(id)
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

router.delete('/:feeID', (req, res, next) => {
const id = req.params.feeID;
Fee.findById(id)
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