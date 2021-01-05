const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
        name : String,
        username: String,
        password: String,
        email: String,
        contact: Number,
        jobrole: String,
        salary: String,
        gender: String,
        joiningdate: String,
        role: String

});
module.exports = mongoose.model('Teacher',teacherSchema);