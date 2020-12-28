const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const College = require('../models/college');

router.get('/', (req, res, next) => {
College.find()
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


    const college = new College({
         _id: new mongoose.Types.ObjectId(),
         
        name: req.body.name,
        location: req.body.location 
        
     });
     
      college
     .save()
      .then(result => {
          console.log(result);
          
      res.status(201).json  ({
        message: 'HANDLING POST REQUEST TO /colleges',
      createdCollege: result
    
    });
      })
      .catch(err =>   {
          console.log(err)
          res.status(500).json({
              error: err 
          
        });
    
      });
    });
router.get('/:collegeID', ( req, res, next) => {
const id = req.params.collegeID;
College.findById(id)
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

router.delete('/:collegeID', (req, res, next) => {
const id = req.params.collegeID;
College.findById(id)
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