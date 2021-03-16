var express = require("express");
var router = express.Router();
const News = require("../models/news");

/* GET home page. */
router.get("/", (req, res) => {
  const search = req.query.search;

  const findeNews = News.find({ title: search }).sort({
    created: -1,
  });

  findeNews.exec((err, data) => {
    res.render("news", { title: "News", data });
  });
});

module.exports = router;
