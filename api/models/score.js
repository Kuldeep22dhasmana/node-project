const mongoose = require('mongoose');

const scoreSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    studentname: String,
    mark: Number,
    subject: String
});
module.exports = mongoose.model('Score',scoreSchema);