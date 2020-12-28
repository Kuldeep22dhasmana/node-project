const mongoose = require('mongoose');

const collegeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    location: String
    
});
module.exports = mongoose.model('College',collegeSchema);