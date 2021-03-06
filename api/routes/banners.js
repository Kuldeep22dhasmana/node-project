const express = require('express');
const router = express.Router();
const  mongoose = require('mongoose');
const Banner = require('../models/banner');

router.get('/', (req, res, next) => {
 Banner.find()
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
    const banner = new Banner ({
        _id: new mongoose.Types.ObjectId,
        status: req.body.status,
        img: req.body.img,
        role: req.body.role,
        bid: req.body.bid
    });
     banner
    
    .save()
    .then(result => {
        console.log(result);
        res.status(201).json ({
            message: 'HANDLING POST REQUEST TO /banners',
            createdBanner: result
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: err});
    });    
    
});


router.get('/:bannerID', (req, res, next) => {
    const id = req.params.bannerID;
    Banner.findById(id)
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

router.delete('/:bannerID', (req, res, next) => {
    const id = req.params.bannerID;
    Banner.findById(id)
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

router.put('/:bannerID', ( req, res, next) => {
    const id = req.params.bannerID;
    const banner = Banner.updateOne({_id:id},{ $set : {img:req.body.img , status:req.body.status , role: req.body.role , bid: req.body.bid} })
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