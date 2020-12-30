const mongoose = require('mongoose');

const feeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    studentid: String,
    parentid: String,
    amount: Number,
    date: String,
    time: String,
    status: String

    
});
module.exports = mongoose.model('Fee',feeSchema);