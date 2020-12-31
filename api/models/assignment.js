const mongoose = require('mongoose');

const assignmentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    subjectid: String,
    teacherid: String,
    time: String
});

module.exports = mongoose.model('Assigment', assignmentSchema);