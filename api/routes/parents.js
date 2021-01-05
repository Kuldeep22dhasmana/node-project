const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Parent =  require('../models/parent');

router.get('/', (req, res, next) => {
Parent.find()
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

const parent = new Parent({
     _id: new mongoose.Types.ObjectId(),
     
     parentid: req.body.parentid,
     studentid: req.body.studentid,
     contact: req.body.contact,
     email: req.body.email
    
 });
  parent
  .save()
  .then(result => {
      console.log(result);
      
  res.status(201).json  ({
    message: 'HANDLING POST REQUEST TO /parents',
  createdParent: result

});
  })
  .catch(err =>   {
      console.log(err)
      res.status(500).json({
          error: err 
      
    });

  });
});

router.get('/:parentID', ( req, res, next) => {
const id = req.params.parentID;
Parent.findById(id)
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

router.delete('/:parentID', (req, res, next) => {
const id = req.params.parentID;
Parent.findById(id)
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

router.put('/:parentID', ( req, res, next) => {
  const id = req.params.parentID;
  const parent = Parent.updateOne({_id:id},{ $set : {parentid:req.body.parentid , studentid:req.body.studentid  , contact: req.body.contact , email: req.body.email }})
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