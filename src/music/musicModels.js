const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
    band: {
        type: String, 
        unique: true,
        require: true
    },
    song: {
        type: String
    }, 
    genre: {
        type: String
    },
    year: {
        type: String
    }
})

const Music = mongoose.model("Music", musicSchema);

module.exports = Music;