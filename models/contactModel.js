var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  gender: String,
  phone: String,
  create_date: {
    type: Date,
    default: Date.now,
  },
});

var User = mongoose.model("User", userSchema);

module.exports = User;
