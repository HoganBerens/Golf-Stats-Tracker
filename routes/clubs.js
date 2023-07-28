var express = require("express");
var router = express.Router();
const passport = require("passport");
const clubsCtrl = require("../controllers/clubs");
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.get("/clubs", ensureLoggedIn, clubsCtrl.show);

router.post("/clubs", ensureLoggedIn, clubsCtrl.new);

router.get("/clubs/:id", ensureLoggedIn, clubsCtrl.showUpdateForm);

router.put("/clubs/:id", ensureLoggedIn, clubsCtrl.update);

router.delete("/clubs/:id", ensureLoggedIn, clubsCtrl.delete);

//need a comment

module.exports = router;
