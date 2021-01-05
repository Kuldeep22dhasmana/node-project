const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Timetable = require('../models/timetable');

router.get('/', (req, res, next) => {
Timetable.find()
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

const timetable = new Timetable({
     _id: new mongoose.Types.ObjectId(),
     
    time: req.body.date,
    day: req.body.day,
    period1: req.body.period1,
    period2: req.body.period2,
    period3: req.body.period3,
    period4: req.body.period4,
    period5: req.body.period5,
    period6: req.body.period6

 });
  timetable
  .save()
  .then(result => {
      console.log(result);
      
  res.status(201).json  ({
    message: 'HANDLING POST REQUEST TO /timetables',
  createdLibrary: result

});
  })
  .catch(err =>   {
      console.log(err)
      res.status(500).json({
          error: err 
      
    });
  });
});

router.get('/:timetableID', ( req, res, next) => {
const id = req.params.timetableID;
Timetable.findById(id)
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

router.delete('/:timetableID', (req, res, next) => {
const id = req.params.timetableID;
Timetable.findById(id)
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

router.put('/:timetableID', ( req, res, next) => {
  const id = req.params.timetableID;
  const timetable = Timetable.updateOne({_id:id},{ $set : {time:req.body.time , day: req.body.day , period1:req.body.period1 , period2:req.body.period2 , period3:req.body.period3 , period4:req.body.period4 , period5:req.body.period5 , period6:req.body.period6}})
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