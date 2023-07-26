const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clubSchema = new Schema({
  name: { type: String },
  distance: { type: Number },
});

const holeSchema = new Schema({
  par: { type: Number },
  clubHitOffTee: {},
  fairwayHit: {
    type: Boolean,
  },
  fairwayMissed: { type: String },
  clubHitSecond: {},
  greenHit: {
    type: Boolean,
  },
  greenMissed: { type: String },
  putts: {
    type: Number,
  },
  score: {
    type: Number,
  },
  totalPar: {
    type: Number,
  },
  totalScore: {
    type: Number,
    // totalSCore
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
    lastScore: {
      holes: [holeSchema],
      totals: [],
    },
    displayedScore: {
      holes: [],
      totals: [],
    },
    clubs: [clubSchema],
    count: { type: Number, default: 1 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
