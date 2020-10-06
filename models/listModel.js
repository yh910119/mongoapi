var mongoose = require("mongoose");
var listSchema = mongoose.Schema({
  title: {
    type: String,
  },
  contents: {
    type: String,
  },
  author: {
    type: String,
  },
  create_date: {
    type: Date,
    default: Date.now,
  },
});

var List = mongoose.model("List", listSchema);

module.exports = List;
