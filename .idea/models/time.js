const mongoose = require("mongoose");

const ScoreSchema = new mongoose.Schema({
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },

});

const Time = mongoose.model("Time", ScoreSchema);

module.exports = Time;