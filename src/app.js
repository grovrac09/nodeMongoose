require("./database/connection");

const yargs = require("yargs");

const {addMusic, listMusic, deleteMusic, updateMusic} = require("./music/musicMethods");

const app = async (args) => {
    switch (process.argv[2]) {
        case "add":
            addMusic({band: args.band, song: args.song, genre: args.genre});
        break;
        case "list":
            listMusic();
        break;
        case "remove":
            deleteMusic(args.genre);
        break;
        case "update":
            updateMusic({_id: process.argv[3]}, {band: args.band, song: args.song, genre: args.genre, year: args.year});
        break;
        default: 
            console.log("incorrect command");
    }
}

app(yargs.argv);





