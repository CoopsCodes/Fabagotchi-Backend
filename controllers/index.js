const Fab = require("../models/Fab");

// Give em all.
const index = (req, res) => {
  const allFabs = Fab.find({});
  res.send(allFabs);
};

// Get me one fabagotchi.
const show = (req, res) => {
  const { id } = req.params;
  const fab = Fab.find({ _id: id });
  res.send(fab);
};

// Use the info I gave you to make one
const create = (req, res) => {
  const data = req.body;
  const newFab = Fab.create(data);
  res.send(newFab);
};

module.exports = { index, show, create };
