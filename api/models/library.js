const mongoose = require('mongoose');

const librarySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

     bookname: String,
    bookid: Number,
    dateofissuse: String,
    dateofsubmission: String, 
    numberofbook: Number

});
module.exports = mongoose.model('Library',librarySchema);