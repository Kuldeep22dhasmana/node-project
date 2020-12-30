const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Unit =  require('../models/unit');

router.get('/', (req, res, next) => {
Unit.find()
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
 const unit = new Unit({
     _id: new mongoose.Types.ObjectId(),
     
     unitname: req.body.unitname,
     chapterid: req.body.chapterid
 });
     unit
     .save()
     .then(result => {
      console.log(result);
      
  res.status(201).json ({
     message: 'HANDLING POST REQUEST TO /units',
     createdUnit: result
    });
})
  .catch(err =>   {
      console.log(err)
      res.status(500).json({
          error: err 
      
    });

  });
});

router.get('/:unitID', ( req, res, next) => {
const id = req.params.unitID;
Unit.findById(id)
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

router.delete('/:unitID', (req, res, next) => {
const id = req.params.chapterID;
Unit.findById(id)
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

router.put('/:unitID', ( req, res, next) => {
  const id = req.params.unitID;
  const unit = Unit.updateOne({_id:id},{ $set : {unitname:req.body.unitname}})
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