var express = require("express");
var router = express.Router();
const passport = require("passport");

router.get("/clubs", function (req, res) {
  res.render("clubs/show");
});

module.exports = router;
