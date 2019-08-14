const Fab = require("../models/Fab");

// Give em all.
const index = async (req, res) => {
  const allFabs = await Fab.find({});
  console.log("index", allFabs);
  res.send(allFabs);
};

// Get me one fabagotchi.
const show = async (req, res) => {
  const { id } = req.params;
  const fab = await Fab.find({ _id: id });
  console.log("Show", fab);
  res.send(fab);
};

// Use the info I gave you to make one
const create = async (req, res) => {
  const data = req.body;
  const newFab = await Fab.create(data);
  console.log("Create", data, newFab);
  res.send(newFab);
};

module.exports = { index, show, create };
