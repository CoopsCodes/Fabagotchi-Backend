const express = require("express");
const { index, show, create } = require("../controllers");

const router = new express.Router();

router.get("/", index);
router.get("/:id", show);
router.post("/", create);

module.exports = router;
