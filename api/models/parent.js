const mongoose = require('mongoose');

const parentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    username: String,
    password: Number,
    contact: Number,
    email: String
});
module.exports = mongoose.model('Parent',parentSchema);