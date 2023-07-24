const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const holeSchema = new Schema({
  par: { type: Number, require: true },
  clubHitOffTee: {
    type: String,
    require: true,
  },
  fairwayHit: {
    type: Boolean,
    fairwayMissed: String,
  },
  clubHitSecond: {
    type: String,
  },
  greenHit: {
    type: Boolean,
    greenMissed: String,
    require: true,
  },
  putts: {
    type: Number,
    require: true,
  },
  score: {
    type: Number,
    require: true,
  },
});

const scoreSchema = new Schema({
  totalScore: Number,
  totalPar: Number,
  holes: [holeSchema],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  userName: String,
  userAvatar: String,
});

//this is how you reference the user's objectId that created the score
module.exports = mongoose.model("Score", scoreSchema);
