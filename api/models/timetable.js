const mongoose = require('mongoose');

const timetableSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
        day: String,
        date: String,
        period1: String,
        period2: String,
        period3: String,
        period4: String,
        period5: String,
        period6: String
    

});
module.exports = mongoose.model('Timetable',timetableSchema);