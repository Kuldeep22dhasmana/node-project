const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
        name : String,
        username: String,
        password: Number,
        email: String,
        contact: Number
});
module.exports = mongoose.model('Teacher',teacherSchema);