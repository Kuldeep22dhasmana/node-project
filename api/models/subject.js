const mongoose = require('mongoose');

const subjectSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    subjectname: String,
    subjectcode: String
    
});

module.exports = mongoose.model('Subject', subjectSchema);