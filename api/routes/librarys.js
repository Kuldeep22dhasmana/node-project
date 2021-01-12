const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Library =  require('../models/library');

router.get('/', (req, res, next) => {
Library.find()
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

const library = new Library({
     _id: new mongoose.Types.ObjectId(),
     
    bookname: req.body.bookname,
    bookid: req.body.bookid,
    dateofissuse: req.body.dateofissue,
    dateofsubmission: req.body.dateofsubmission,
    numberofbook: req.body.numberofbook,
    studentname: req.body.studentname

 });
  library
  .save()
  .then(result => {
      console.log(result);
      
  res.status(201).json  ({
    message: 'HANDLING POST REQUEST TO /librarys',
  createdLibrary: result

});
  })
  .catch(err =>   {
      console.log(err)
      res.status(500).json({
          error: err 
      
    });
  });
});

router.get('/:libraryID', ( req, res, next) => {
const id = req.params.libraryID;
Library.findById(id)
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

router.delete('/:LibraryID', (req, res, next) => {
const id = req.params.libraryID;
Library.findById(id)
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

router.put('/:libraryID', ( req, res, next) => {
  const id = req.params.libraryID;
  const library = Library.updateOne({_id:id},{ $set : { bookname: req.body.bookname, bookid: req.body.bookid, dateofissuse: req.body.dateofissue, dateofsubmission: req.body.dateofsubmission, numberofbook: req.body.numberofbook }})
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