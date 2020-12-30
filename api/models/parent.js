const mongoose = require('mongoose');

const parentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    parentid: String,
    studentid: String,
    contact: String,
    email: String
});
module.exports = mongoose.model('Parent',parentSchema);