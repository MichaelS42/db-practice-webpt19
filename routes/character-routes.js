const router = require("express").Router();
const Characters = require("../models/character-models.js");

router.get("/", (req, res) => {
  res.send("GET characters!!!");
});

module.exports = router;
