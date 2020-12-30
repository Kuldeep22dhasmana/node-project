const mongoose = require('mongoose');

const unitSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    unitname: String,
    chapterid: String
});

module.exports = mongoose.model('Unit', unitSchema);