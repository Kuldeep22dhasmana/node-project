const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Generalsetting = require('../models/generalsetting');

router.get('/', (req, res, next) => {
Generalsetting.find()
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

const generalsetting = new Generalsetting({
     _id: new mongoose.Types.ObjectId(),
     platformname: req.body.platformname,
     platformlogo: req.body.platformlogo,
     contact: req.body.contact,
     email: req.body.email,
     about: req.body.about,
     primarycolor: req.body.primarycolor,
     secondarycolor: req.body.secondarycolor
    
 });
  generalsetting
  .save()
  .then(result => {
      console.log(result);
      
  res.status(201).json  ({
    message: 'HANDLING POST REQUEST TO /generalsettings',
  createdGeneralsetting: result

});
  })
  .catch(err =>   {
      console.log(err)
      res.status(500).json({
          error: err 
      
    });

  });
});

router.get('/:generalsettingID', ( req, res, next) => {
const id = req.params.generalsettingID;
Generalsetting.findById(id)
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

router.delete('/:generalsettingID', (req, res, next) => {
const id = req.params.generalsettingID;
Generalsetting.findById(id)
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

router.put('/:generalsettingID', ( req, res, next) => {
  const id = req.params.generalsettingID;
  const generalsetting = Generalsetting.updateOne({_id:id},{ $set : {platformname: req.body.platformname , platformlogo: req.body.platformlogo , contact: req.body.contact , email: req.body.email , about: req.body.about , primarycolor: req.body.primarycolor , secondarycolor: req.body.secondarycolor}})
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