const mongoose = require('mongoose');

const syllabusSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    subjectid: String,
    marks: String,
    time: String
});

module.exports = mongoose.model('Syllabus', syllabusSchema);