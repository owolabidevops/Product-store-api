const mongoose = require("mongoose");

const tiktokSchema = mongoose.Schema({
  title: String,
  price: String,
  image: String,
});
// collection inside the database
module.exports = mongoose.model("product", tiktokSchema);
