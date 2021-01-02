const mongoose = require('mongoose');

const reportSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    studentid: String,
    subjectid: String,
    totalmarks: String,
    testid: String
});
module.exports = mongoose.model('Report',reportSchema);