const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    select: true
  },
  email: {
    type: String,
    select: true,
    unique: true
  },
  password: {
    type: String,
    select: false
  }
});
module.exports = mongoose.model("User", UserSchema);
