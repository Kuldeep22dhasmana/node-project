const mongoose = require('mongoose');

const topicSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    topicname: String,
    videourl: String
});

module.exports = mongoose.model('Topic', topicSchema);