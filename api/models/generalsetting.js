const mongoose = require('mongoose');

const generalsettingSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    platformname: String,
    platformlogo: String,
    contact: Number,
    email: String,
    about: String,
    primarycolor: String,
    secondarycolor: String
});
module.exports = mongoose.model('Generalsetting',generalsettingSchema);