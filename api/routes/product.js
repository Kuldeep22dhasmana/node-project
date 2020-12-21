 const express = require('express');
  const router = express.Router();
  
  

router.get('/', (req, res, next) => {
    res.status(200).json  ({
        message: 'HANDLING GET REQUEST TO /proudct'
    });

});

router.post('/', (req, res, next) => {
    const teacher = {
        name: req.body.name,
        age: req.body.age,
        designation: req.body.designation,
        subject: req.body.subject,
        address: req.body.address,
        contact: req.body.contact,
        gender: req.body.gender,
        jobrole: req.body.jobrole,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
        
            };
        
    res.status(201).json  ({
        message: 'HANDLING POST REQUEST TO /product',
      createdTeacher: teacher
    });

});

router.put('/', (req, res, next) => {
    const teacher = {
        name: req.body.name,
        age: req.body.age,
        designation: req.body.designation,
        subject: req.body.subject,
        address: req.body.address,
        contact: req.body.contact,
        gender: req.body.gender,
        jobrole: req.body.jobrole,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    };
    res.status(201).json  ({
        message: 'HANDLING PUT REQUEST TO /product',
      createdTeacher: teacher
    });

});

router.get('/:productID', ( req, res, next) => {
    const id = req.params.productID;
    if (id ==='special') {
       res.status(200).json ({
          message: 'YOU DISCOVERD SPECIAL ID',
           id: id
       });
      }
       else {
           res.status(200).json ({
              message: 'YOU PASSED AN ID'
           });

       
      }
 });

 router.patch('/:productID', (req, res, next) => {
      res.status(200).json ({
           message: 'UPDATED PRODUCT'
      });
 });

 
 router.delete('/:productID', (req, res, next) => {
    res.status(200).json ({
         message: 'DELETED PRODUCT'
    });
});
 module.exports = router;