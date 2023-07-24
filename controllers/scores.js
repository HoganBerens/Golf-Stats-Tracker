const User = require("../models/user");

function newScore(req, res) {
  res.render("scores/new", { errorMsg: "" });
}

async function create(req, res) {
  req.user.lastScore.push(req.body);
  await req.user.save();
  res.redirect("/scores/new");
}

function show(req, res) {
  res.render("scores/show", { scores: req.user.scores });
}

function addToUser(req, res) {
  res.render("scores/submit");
}

async function submit(req, res) {
  let user = req.user;
  user.scores.push(user.lastScore);
  user.lastScore = [];
  await user.save();
  res.redirect("/scores");
}

module.exports = {
  create,
  new: newScore,
  show,
  addToUser,
  submit,
};
