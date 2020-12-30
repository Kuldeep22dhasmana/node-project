 const express = require('express');
 const router = express.Router();
 const mongoose = require('mongoose');
 const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
    cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
       cb(null, file.originalname);
   }

});
 
const fileFilter =  (req, file, cb) => {
    //reject a file
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' ) {
        cb(null, true);
    }
      else{
      cb(null, false);
    }
};

const upload = multer({
     storage: storage,
     limits: {
     fileSize: 1024 * 1024 * 5
},
     fileFilter: fileFilter
});

const Product =  require('../models/product');

router.get('/', (req, res, next) => {
    Product.find()
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
router.post('/', upload.single('productImage'), (req, res, next) => {
    const product = new Product({

        _id: new mongoose.Types.ObjectId(),
         name: req.body.name,
         price: req.body.price,
         productImage: req.file.path
     });
      product
      .save()
      .then(result => {
          console.log(result);
          
      res.status(201).json  ({
        message: 'HANDLING POST REQUEST TO /products',
      createdProduct: result

    });
      })
      .catch(err =>   {
          console.log(err)
          res.status(500).json({
              error: err 
          
        });
 
      });
    });

router.get('/:productID', ( req, res, next) => {
    const id = req.params.productID;
    Product.findById(id)
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
 router.patch('/:productID', (req, res, next) => {
      res.status(200).json ({
           message: 'UPDATED PRODUCT'
      });
 });

 
 router.delete('/:productID', (req, res, next) => {
    const id = req.params.productID;
    Product.findById(id)
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

module.exports = router;