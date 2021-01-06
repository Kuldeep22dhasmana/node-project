const express = require('express');

const router = express.Router();
const  checkAuth = require('../middleware/check-auth');

//HANDLING INCOMING GET REQUEST TO /ORDER
router.get('/',  checkAuth , (req, res, next) => {
  res.status(200).json  ({
      message: 'ORDER were FETCHED'
      
  });
});

router.post('/',  checkAuth ,(req, res, next) => {
   const order = {
     teacherID: req.body.teacherID,
     quantity: req.body.quantity

   };
    res.status(201).json  ({
        message: 'ORDER WAS CREATED',
        order: order,
        
    });
  });
  
router.get('/:orderID',  checkAuth ,(req, res, next) => {
    res.status(200).json  ({
        message: 'ORDER DETAILS',
        orderID: req.params.orderID
        
    });
  });
  
router.delete('/:orderID',  checkAuth , (req, res, next) => {
    res.status(200).json  ({
        message: 'ORDER DELETE',
        orderID: req.params.orderID
        
    });
  });

   module.exports = router;