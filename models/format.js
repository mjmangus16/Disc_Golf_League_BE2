const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Users building a format will be able to select from a few pre-built options to "customize" their format.
// Based on their selections, the route will run the functions that match their selections.
// Those functions can be found in the pointsHandlers and scoreHandlers folders

const FormatSchema = new Schema({
  league_id: {
    type: Number,
    required: true
  },
  details: {
    // Explanation of the format
    type: String,
    required: true
  },
  singles: {
    type: Boolean,
    required: true,
    default: false
  },
  randomDoubles: {
    type: Boolean,
    required: true,
    default: false
  },
  byopDoubles: {
    type: Boolean,
    required: true,
    default: false
  },
  putting: {
    type: Boolean,
    required: true,
    default: false
  },
  points: {
    type: String,
    required: true,
    default: "none"
  },
  scores: {
    type: String,
    required: true,
    default: "none"
  },
  dropWorst: {
    type: Number,
    required: true,
    default: 0
  },
  dropBest: {
    type: Number,
    required: true,
    default: 0
  }
});

module.exports = LeagueFormat = mongoose.model("leagueFormat", FormatSchema);
