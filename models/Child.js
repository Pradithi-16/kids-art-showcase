const mongoose = require("mongoose");

const childSchema = new mongoose.Schema({
  childName: String,
  age: Number,
  bio: String,
  profilePicture: String,

  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Child", childSchema);