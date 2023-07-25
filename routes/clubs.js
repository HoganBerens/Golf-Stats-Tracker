var express = require("express");
var router = express.Router();
const passport = require("passport");
const clubsCtrl = require("../controllers/clubs");
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.get("/clubs", ensureLoggedIn, clubsCtrl.show);

router.post("/clubs", ensureLoggedIn, clubsCtrl.new);

router.delete("/clubs/:id", ensureLoggedIn, clubsCtrl.delete);

module.exports = router;
