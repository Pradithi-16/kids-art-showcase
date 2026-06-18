const mongoose = require("mongoose");

const competitionSchema = new mongoose.Schema({
  title: String,
  description: String,
  hashtag: String,
  deadline: Date,
  ageGroup: String
});

module.exports = mongoose.model(
  "Competition",
  competitionSchema
);