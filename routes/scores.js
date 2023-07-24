var express = require("express");
var router = express.Router();
const passport = require("passport");

router.get("/newScore", function (req, res) {
  res.render("scores/new");
});
router.get("/scores", function (req, res) {
  res.render("scores/show");
});

module.exports = router;
