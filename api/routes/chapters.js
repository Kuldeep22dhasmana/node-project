const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Chapter =  require('../models/chapter');

router.get('/', (req, res, next) => {
Chapter.find()
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
 const chapter = new Chapter({
     _id: new mongoose.Types.ObjectId(),
     
     chaptername: req.body.chaptername,
     topicid: req.body.topicid,
     videourl: req.body.videourl
 });
     chapter
     .save()
     .then(result => {
      console.log(result);
      
  res.status(201).json ({
     message: 'HANDLING POST REQUEST TO /chapters',
     createdChapter: result
    });
})
  .catch(err =>   {
      console.log(err)
      res.status(500).json({
          error: err 
      
    });

  });
});

router.get('/:chapterID', ( req, res, next) => {
const id = req.params.chapterID;
Chapter.findById(id)
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

router.delete('/:chapterID', (req, res, next) => {
const id = req.params.chapterID;
Chapter.findById(id)
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

router.put('/:chapterID', ( req, res, next) => {
  const id = req.params.chapterID;
  const chapter = Chapter.updateOne({_id:id},{ $set : {chaptername:req.body.chaptername}})
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