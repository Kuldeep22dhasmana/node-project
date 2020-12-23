const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/order')

mongoose.connect('mongodb+srv://node_project:'+ process.env.MONGO_ATLAS_PW +'@cluster0.6tknt.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true } );

app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//ROUTES WHICH SHOULD HANDLE REQUEST
app.use('/products', productRoutes);
app.use('/order', orderRoutes);


app.use((req, res, next) => {
  const error = new Error('NOT FOUND');
  error.status = 404;
  next(error);
})
  app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json ({
      error: {
        message: error.message

    }

  });

});

  module.exports = app;