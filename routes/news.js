const express = require("express");
const router = express.Router();
const News = require("../models/news");

router.get("/", (req, res) => {
  const search = req.query.search;

  const findNews = News.find({ title: search }).sort({
    created: -1,
  });

  findNews.exec((err, data) => {
    res.render("news", { title: "News", data, search });
  });
});

module.exports = router;
