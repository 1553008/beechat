const mongoose = require("mongoose");
const Schema = mongoose.Schema({
  name: {
    type: String,
    select: true
  },
  users: {
    type: [mongoose.SchemaTypes.ObjectId]
  }
});
module.exports = mongoose.model("Conversation", Schema);
