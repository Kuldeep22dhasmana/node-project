const mongoose = require('mongoose');

const subjectSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    department: String,
    subjectcode: Number
});

module.exports = mongoose.model('Subject', subjectSchema);