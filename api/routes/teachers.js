const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Teacher =  require('../models/teacher');

router.get('/', (req, res, next) => {
Teacher.find()
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

const teacher = new Teacher({
     _id: new mongoose.Types.ObjectId(),
     name: req.body.name,
     username: req.body.username,
     password: req.body.password,
     email: req.body.email,
     contact: req.body.contact,
     salary: req.body.salary,
     jobrole: req.body.jobrole,
     joiningdate: req.body.joiningdate,
     gender: req.body.gender,
     role: req.body.role
 });
  teacher
  .save()
  .then(result => {
      console.log(result);
      
  res.status(201).json  ({
    message: 'HANDLING POST REQUEST TO /teachers',
  createdTeacher: result

});
  })
  .catch(err =>   {
      console.log(err)
      res.status(500).json({
          error: err 
      
    });

  });
});

router.get('/:teacherID', ( req, res, next) => {
const id = req.params.teacherID;
Teacher.findById(id)
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

router.delete('/:teacherID', (req, res, next) => {
const id = req.params.teacherID;
Teacher.findById(id)
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


router.put('/:teacherID', ( req, res, next) => {
  const id = req.params.teacherID;
  const teacher = Teacher.updateOne({_id:id},{ $set : {name:req.body.name , email: req.body.email , username: req.body.username , role: req.body.role , salary: req.body.salary , password: req.body.password , contact: req.body.contact , gender: req.body.gender  }})
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