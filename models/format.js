const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FormatSchema = new Schema({
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
    type: Boolean,
    required: true,
    default: false
  },
  scores: {
    type: Boolean,
    required: true,
    default: false
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
