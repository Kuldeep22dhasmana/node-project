const mongoose = require('mongoose');

 const todayclassSchema = mongoose.Schema ({

    _id: mongoose.Schema.Types.ObjectId,

    classtime: String,
    classname: String,
    teacherid: String,
    subjectid: String,
    periodnumber: String
 })

 module.exports = mongoose.model('Todayclass', todayclassSchema);