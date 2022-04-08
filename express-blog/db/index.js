const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected");
});
let db = mongoose.connection;

module.exports = db;
