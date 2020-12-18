 const express = require('express');

  const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json  ({
        message: 'HANDLING GET REQUEST TO /proudct'
    });

});

router.post('/', (req, res, next) => {
    res.status(201).json  ({
        message: 'HANDLING POST REQUEST TO /product'
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