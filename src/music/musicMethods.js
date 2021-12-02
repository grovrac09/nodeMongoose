const Music = require("./musicModels");

exports.addMusic = async (musicObj) => {
    try {
        const music = await new Music(musicObj);
        await music.save();
        console.log(`Successfully added ${music.band}`)
    } catch (error) {
        console.log(error);
    }
};

exports.listMusic = async () => {
    try {
        console.log(await Music.find({}));
    } catch (error) {
        console.log(error);
    }
};

exports.deleteMusic = async (collection, musicObj) => {
    console.log(musicObj);
    try {
        await collection.remove({genre: musicObj.genre});
    } catch (error) {
        console.log(error);
    }
};