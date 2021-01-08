const mongoose = require('mongoose');

const assignmentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    noofquestion: String,
    teacherid: String,
    marks: String,
    name: String
});

module.exports = mongoose.model('Assigment', assignmentSchema);