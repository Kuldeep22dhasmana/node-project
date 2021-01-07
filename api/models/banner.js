const mongoose = require('mongoose');

 const bannerSchema = mongoose.Schema ({

    _id: mongoose.Schema.Types.ObjectId,

    img: String,
    role: String,
    bid: String,
    status: String
 })

 module.exports = mongoose.model('Banner', bannerSchema);