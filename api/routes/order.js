const express = require('express');

const router = express.Router();

//HANDLING INCOMING GET REQUEST TO /ORDER
router.get('/', (req, res, next) => {
  res.status(200).json  ({
      message: 'ORDER were FETCHED'
      
  });
});

router.post('/', (req, res, next) => {
   const order = {
     teacherID: req.body.teacherID,
     quantity: req.body.quantity

   };
    res.status(201).json  ({
        message: 'ORDER WAS CREATED',
        order: order,
        
    });
  });
  
router.get('/:orderID', (req, res, next) => {
    res.status(200).json  ({
        message: 'ORDER DETAILS',
        orderID: req.params.orderID
        
    });
  });
  
router.delete('/:orderID', (req, res, next) => {
    res.status(200).json  ({
        message: 'ORDER DELETE',
        orderID: req.params.orderID
        
    });
  });

   module.exports = router;