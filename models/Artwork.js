const mongoose = require("mongoose");

const artworkSchema = new mongoose.Schema({
  title: String,
  caption: String,
  image: String,

  childId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Child"
  },

  approved: {
    type: Boolean,
    default: false
  },

  likes: {
    type: Number,
    default: 0
  },

  competitionTag: String,

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Artwork", artworkSchema);