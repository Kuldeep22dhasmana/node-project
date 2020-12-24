const mongoose = require('mongoose');

const attendanceSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
        day : String,
        student: String,
        teacher: String
});
module.exports = mongoose.model('Attendance',attendanceSchema);