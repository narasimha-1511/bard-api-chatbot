const express = require("express");

const router = express.Router();

const TextToText = require("../bard/TextToText.js");

router.post("/", (req, res) => {
  const data = req.body;
  //   console.log(data);
  TextToText(data.message)
    .then((text) => {
      res.send({ prompt: text }).status(200);
    })
    .catch((err) => {
      console.log(err);
      res.send({ prompt: "Error Try Again" }).status(500);
    });
});

module.exports = router;
