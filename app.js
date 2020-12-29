const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/order')
const teacherRoutes = require('./api/routes/teachers')
const attendanceRoutes = require('./api/routes/attendances')
const parentRoutes = require('./api/routes/parents')
const subjectRoutes = require('./api/routes/subjects')
const courseRoutes = require('./api/routes/courses')
const collegeRoutes = require('./api/routes/colleges')
const libraryRoutes = require('./api/routes/librarys')
const scoreRoutes = require('./api/routes/scores')
const feeRoutes = require('./api/routes/fees')
const generalsettingRoutes = require('./api/routes/generalsettings')
const studentRoutes = require('./api/routes/students')
const timetableRoutes = require('./api/routes/timetables')


mongoose.connect('mongodb+srv://node_project:'+ process.env.MONGO_ATLAS_PW +'@cluster0.6tknt.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true } );

app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//ROUTES WHICH SHOULD HANDLE REQUEST
app.use('/product', productRoutes);
app.use('/order', orderRoutes);
app.use('/teacher', teacherRoutes);
app.use('/attendance', attendanceRoutes);
app.use('/parent', parentRoutes);
app.use('/subject', subjectRoutes);
app.use('/course', courseRoutes);
app.use('/college', collegeRoutes);
app.use('/library', libraryRoutes);
app.use('/score', scoreRoutes);
app.use('/fee', feeRoutes);
app.use('/generalsetting', generalsettingRoutes);
app.use('/student', studentRoutes);
app.use('/timetable', timetableRoutes);


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