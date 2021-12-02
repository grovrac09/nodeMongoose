require("./database/connection");

const yargs = require("yargs");

const {addMusic, listMusic} = require("./music/musicMethods");

const app = async (args) => {
    switch (process.argv[2]) {
        case "add":
            addMusic({band: args.band, song: args.band});
        break;
        case "list":
            listMovies();
        break;
        default: 
            console.log("incorrect command");
    }
}

app(yargs.argv);