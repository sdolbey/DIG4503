const Express = require("express");
const Chalk = require("chalk");
const App = Express();
const port = 80;

const cors = require("cors");
App.use(cors());

const pokemons = require("json-pokemon");
const getPokemons = require("json-pokemon/getPokemon");



App.use("/", Express.static("client/build"));

App.get("/id/:id", (req, res) => {
    let pokemonID = Number(req.params.id);
    let pokemonData = getPokemons.getPokemonById(pokemonID);

    let result = {"error": "Can't find that Pokemon"};

    if(pokemonData != null) {
        result = pokemonData;
        console.log(Chalk.green(req.path));
    } else {
        console.log(Chalk.red(req.path));        
    }

    res.json(result);
});

App.get("/name/:name", (req, res) => {
    let pokemonName = req.params.name;
    let pokemonData = getPokemons.getPokemonByName(pokemonName);

    let result = {"error": "Can't find that Pokemon"};

    if(pokemonData != null) {
        result = pokemonData;        
        console.log(Chalk.green(req.path));
    } else {
        console.log(Chalk.red(req.path));
    }

    res.json(result);
});

App.listen(port, ()=> {
    console.log("server running");
});