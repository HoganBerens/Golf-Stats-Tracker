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

function showUpdateForm(req, res) {
  console.log(req);
  res.render("clubs/update", {
    id: req.params.id,
    club: req.user.clubs.find((club) => club._id == req.params.id),
  });
}

async function update(req, res) {
  let club = await req.user.clubs.find((club) => club._id == req.params.id);
  let index = req.user.clubs.indexOf(club);
  req.user.clubs.splice(index, 1, req.body);
  await req.user.save();
  res.redirect("/clubs");
}

async function deleteClub(req, res) {
  let user = req.user;
  user.clubs.remove(req.params.id);
  await user.save();
  res.redirect("/clubs");
}

module.exports = {
  show,
  new: newClub,
  delete: deleteClub,
  update,
  showUpdateForm,
};
