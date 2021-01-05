const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Topic =  require('../models/topic');

router.get('/', (req, res, next) => {
Topic.find()
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

const topic = new Topic({
     _id: new mongoose.Types.ObjectId(),
     
     topicname: req.body.topicname,
     videourl: req.body.videourl
 });
  topic
  .save()
  .then(result => {
      console.log(result);
      
  res.status(201).json  ({
    message: 'HANDLING POST REQUEST TO /topics',
  createdTopic: result

});
  })
  .catch(err =>   {
      console.log(err)
      res.status(500).json({
          error: err 
      
    });

  });
});

router.get('/:topicID', ( req, res, next) => {
const id = req.params.topicID;
Topic.findById(id)
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

router.delete('/:topicID', (req, res, next) => {
const id = req.params.topicID;
Topic.findById(id)
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

router.put('/:topicID', ( req, res, next) => {
  const id = req.params.topicID;
  const topic = Topic.updateOne({_id:id},{ $set : {topicname:req.body.topicname , videourl: req.body.videourl}})
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