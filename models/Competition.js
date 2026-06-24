const mongoose = require("mongoose");


const competitionSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    hashtag: {
        type: String
    },

    deadline: {
        type: Date
    },

    ageGroup: {
        type: String
    }

}, {
    timestamps: true
});


module.exports = mongoose.model(
    "Competition",
    competitionSchema
);