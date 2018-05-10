const mongoose = require("mongoose");
const dbuser = "dunglam97";
const dbpassword = "1";
module.exports = () => {
  mongoose.connect(
    `mongodb://${dbuser}:${dbpassword}@ds119820.mlab.com:19820/beechat`
  );
};
