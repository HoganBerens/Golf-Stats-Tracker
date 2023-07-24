var express = require("express");
var router = express.Router();
const passport = require("passport");
const ensureLoggedIn = require("../config/ensureLoggedIn");
const scoresCtrl = require("../controllers/scores");

router.get("/scores/new", ensureLoggedIn, scoresCtrl.new);

router.get("/scores", ensureLoggedIn, scoresCtrl.show);

router.get("/scores/add", ensureLoggedIn, scoresCtrl.addToUser);

router.post("/scores/add", ensureLoggedIn, scoresCtrl.submit);

router.post("/scores", ensureLoggedIn, scoresCtrl.create);

module.exports = router;
