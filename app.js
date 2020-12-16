const express =  require('express');
const app = express();

app.use((req, res, next) => {
      res.status(200).json({
         mesage: 'IT totally WORKS !'

      });
 })
 module.exports = app;