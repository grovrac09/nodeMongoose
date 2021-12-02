require("./database/connection");

const yargs = require("yargs");

const {addMusic, listMusic, deleteMusic} = require("./music/musicMethods");

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
        default: 
            console.log("incorrect command");
    }
}

app(yargs.argv);



