const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
        name : String,
        email: String,
        contact: Number
});
module.exports = mongoose.model('Teacher',teacherSchema);