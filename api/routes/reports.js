const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Report =  require('../models/report');

router.get('/', (req, res, next) => {
Report.find()
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

const report = new Report({
     _id: new mongoose.Types.ObjectId(),
     studentid: req.body.studentid,
     subjectid: req.body.subjectid,
     totalmarks: req.body.totalmarks,
     testid: req.body.testid
    
 });
  report
  .save()
  .then(result => {
      console.log(result);
      
   res.status(201).json  ({
   message: 'HANDLING POST REQUEST TO /reports',
   createdReport: result

});
  })
  .catch(err =>   {
      console.log(err)
      res.status(500).json({
          error: err 
      
    });

  });
});

router.get('/:reportID', ( req, res, next) => {
const id = req.params.reportID;
Report.findById(id)
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

router.delete('/:reportID', (req, res, next) => {
const id = req.params.reportID;
Report.findById(id)
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

router.put('/:reportID', ( req, res, next) => {
    const id = req.params.reportID;
    const report = Report.updateOne({_id:id},{ $set : {studentid:req.body.studentid}  })
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