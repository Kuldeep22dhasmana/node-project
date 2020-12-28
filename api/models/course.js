const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    totalstudent: Number,
    duration: String
});
module.exports = mongoose.model('Course',courseSchema);