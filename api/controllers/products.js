const mongoose = require("mongoose");
const Product =  require('../models/product');


exports.products_get_all = (req, res, next) => {
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
};

exports.products_create_product = (req, res, next) => {
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
 };

exports.products_get_product = ( req, res, next) => {
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
 
 router.patch('/:productID', checkAuth , (req, res, next) => {
      res.status(200).json ({
           message: 'UPDATED PRODUCT'
      });
    });    
};

exports.products_deleted_product  = (req, res, next) => {
    const id = req.params.productID;
    console.log(req.params.productID)
    Product.findById(req.params.productID)
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
};


exports.products_updated_product = ( req, res, next) => {
    const id = req.params.productID;
    const product = Product.updateOne({_id:id},{ $set : {name: req.body.name, price: req.body.price, productImage: req.file.path  }})
    .exec()
    .then(doc => {
        console.log("FROM DATABASE",doc);
        res.status(200).json(doc);
    })
    .catch(err => {
          console.log(err); 
         res.status(500).json({error: err});
    });
  }