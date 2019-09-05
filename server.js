const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const server = express();
const PORT = 8000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const routes = require("./routes");
server.use(routes);

const databaseUri = process.env.ATLAS_URI;

mongoose.connect(databaseUri, { useNewUrlParser: true }, err => {
  if (err) return console.log(err);
  console.log("Connected to MongoDB");
});

server.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
