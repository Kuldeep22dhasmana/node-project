const mongoose = require('mongoose');

 const bannerSchema = mongoose.Schema ({

    _id: mongoose.Schema.Types.ObjectId,

    img1: String,
    img2: String
 })

 module.exports = mongoose.model('Banner', bannerSchema);