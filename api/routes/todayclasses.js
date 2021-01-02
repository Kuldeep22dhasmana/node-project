const express = require('express');
const router = express.Router();
const  mongoose = require('mongoose');
const Todayclass = require('../models/todayclass');

router.get('/', (req, res, next) => {
 Todayclass.find()
 .exec()
 .then(doc => {
     console.log(doc).json(doc);
     res.status(200).json(doc);
 })
 .catch(err => {
     console.log(err);
     res.status(500).json({error: err});
 });
});

router.post('/', (req, res, next) => {
    const todayclass = new Todayclass ({
        _id: new mongoose.Types.ObjectId,
        classtime: req.body.classtime,
        classname: req.body.classname,
        teacherid: req.body.teacherid,
        subjectid: req.body.teacherid,
        periodnumber: req.body.periodnumber
    });
     todayclass
    .save()
    .then(result => {
        console.log(result);
        res.status(201).json ({
            message: 'HANDLING POST REQUEST TO /todayclasses',
            createdTodayclass: result
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: err});
    });    
    
});


router.get('/:todayclassID', (req, res, next) => {
    const id = req.params.todayclassID;
    Todayclass.findById(id)
    .exec()
    .then(doc => {
        console.log('FROM DATABASE', doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.delete('/:todayclassID', (req, res, next) => {
    const id = req.params.todayclassID;
    Todayclass.findById(id)
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

router.put('/:todayclassID', ( req, res, next) => {
    const id = req.params.todayclassID;
    const todayclass = Todayclass.updateOne({_id:id},{ $set : {classname:req.body.classname}  })
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