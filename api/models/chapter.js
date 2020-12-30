const mongoose = require('mongoose');

const chapterSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    chaptername: String,
    topicid: String,
    videourl: String
});

module.exports = mongoose.model('Chapter', chapterSchema);