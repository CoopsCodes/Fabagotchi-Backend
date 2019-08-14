const mongoose = require("mongoose");

const fabSchema = new mongoose.Schema({
  name: String,
  age: Number,
  hunger: Number,
  alive: Boolean
});

module.exports = mongoose.model("Fab", fabSchema);
