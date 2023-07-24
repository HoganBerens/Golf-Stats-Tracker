const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clubSchema = new Schema({
  name: { type: String, require: true },
  distance: { type: Number, require: true },
});

const holeSchema = new Schema({
  par: { type: Number, require: true },
  clubHitOffTee: {
    type: String /* 
        require: true, */,
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

const userSchema = new Schema(
  {
    name: String,
    googleId: {
      type: String,
      required: true,
    },
    email: String,
    avatar: String,
    scores: [],
    lastScore: [holeSchema],
    clubs: [clubSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
