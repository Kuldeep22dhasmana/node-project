const mongoose = require('mongoose');
const testSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    subjectid: String,
    teacherid: String,
    time: String,
    marks: String
});

module.exports = mongoose.model('Test', testSchema);