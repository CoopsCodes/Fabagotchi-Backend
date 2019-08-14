const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const server = express();
const PORT = 8000;

const routes = require("./routes");
const databaseUri = process.env.ATLAS_URI;

mongoose.connect(databaseUri, { useNewUrlParser: true }, err => {
  if (err) console.log(err);
  console.log("Connected to MongoDB");
});

server.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
