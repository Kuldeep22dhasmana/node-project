const mongoose = require('mongoose');

const performanceSchema = mongoose.Schema ({
  _id: mongoose.Schema.Types.ObjectId,
 
  studentid: String,
  teacherid: String,
  subjectid: String,
  marks: String
});

module.exports = mongoose.model('Performance', performanceSchema);