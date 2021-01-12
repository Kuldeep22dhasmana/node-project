const mongoose = require('mongoose');
const testSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    testname: String,
    teacherid: String,
    time: String,
    obtainedmarks: String,
    totalmarks: String
});

module.exports = mongoose.model('Test', testSchema);