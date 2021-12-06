const Music = require("./musicModels");
const mongoose = require("mongoose");

exports.addMusic = async (musicObj) => {
    try {
        const music = await new Music(musicObj);
        await music.save();
        console.log(`Successfully added ${music.band}`)
        mongoose.connection.close();
    } catch (error) {
        console.log(error);
    }
};

exports.listMusic = async () => {
    try {
        console.log(await Music.find({}));
        mongoose.connection.close();
    } catch (error) {
        console.log(error);
    }
};

exports.updateMusic = async (musicId, musicObj) => {
    try {
        await Music.findByIdAndUpdate(musicId, musicObj);
        console.log(`Successfully updated`)
        mongoose.connection.close();
    } catch (error) {
        console.log(error)
    } 
};

exports.deleteMusic = async (genre) => {
    try {
        await Music.deleteMany({genre: genre});
        console.log(`Successfully deleted ${genre}`);
        mongoose.connection.close();
    } catch (error) {
        console.log(error);
    }
};








