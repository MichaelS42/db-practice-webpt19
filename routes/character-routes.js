const router = require("express").Router();
const Characters = require("../models/character-models.js");

router.get("/", (req, res) => {
  Characters.find()
    .then((characters) => res.status(200).json(characters))
    .catch((err) => {
      console.log(`error: ${error}`.red);
      res.status(500).json({
        message: err,
      });
    });
});


// GET character/:id

// POST character

// PUT character/:id

// DEL character/:id


// GET character/:filter


module.exports = router;
