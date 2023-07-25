const User = require("../models/user");

function show(req, res) {
  res.render("clubs/show", { clubs: req.user.clubs, errorMsg: "" });
}

async function newClub(req, res) {
  let user = req.user;
  user.clubs.push(req.body);
  await user.save();
  res.redirect("/clubs");
}

async function deleteClub(req, res) {
  let user = req.user;
  user.clubs.remove(req.params.id);
  await user.save();
  res.redirect("/clubs");
}

module.exports = { show, new: newClub, delete: deleteClub };
