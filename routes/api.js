const express = require("express");
const router = express.Router();
const Quiz = require("../models/quiz");

router.get("/", (req, res) => {
  Quiz.find({}, (err, data) => {
    res.json({ data });
  }).select("vote id title");
});

module.exports = router;
