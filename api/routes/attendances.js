const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Attendance =  require('../models/attendance');

router.get('/', (req, res, next) => {
Attendance.find()
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

const attendance = new Attendance({
     _id: new mongoose.Types.ObjectId(),
     day: req.body.day,
    student: req.body.student,
    teacher: req.body.teacher
    
    
    
 });
  attendance
  .save()
  .then(result => {
      console.log(result);
      
  res.status(201).json  ({
    message: 'HANDLING POST REQUEST TO /attendances',
  createdAttendance: result

});
  })
  .catch(err =>   {
      console.log(err)
      res.status(500).json({
          error: err 
      
    });

  });
});

router.get('/:attendanceID', ( req, res, next) => {
const id = req.params.attendanceID;
Attendance.findById(id)
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

router.delete('/:attendanceID', (req, res, next) => {
const id = req.params.attendanceID;
Attendance.findById(id)
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

router.put('/:attendanceID', ( req, res, next) => {
  const id = req.params.attendanceID;
  const attendance = Attendance.updateOne({_id:id},{ $set : { day: req.body.day , student: req.body.student , teacher: req.body.teacher }})
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