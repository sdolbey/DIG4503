const Express = require("express");
const Chalk = require("chalk");
const App = Express();
const port = 80;

const pokemons = require("json-pokemon");
const getPokemons = require("json-pokemon/getPokemon");

console.log(getPokemons.getPokemonById(400));

App.get("/id/:id", (req, res) => {
    let pokemonID = Number(req.params.id);
    let pokemonData = getPokemons.getPokemonById(pokemonID);
    if(pokemonData == null) {
        res.send("Can't find that Pokemon. Check your number.");
        console.log(Chalk.red(req.path));
    } else {
        res.send(pokemonData);
        console.log(Chalk.green(req.path));
    }
});

App.get("/name/:name", (req, res) => {
    let pokemonName = req.params.name;
    let pokemonData = getPokemons.getPokemonByName(pokemonName);
    if(pokemonData == null) {
        res.send("Can't find that Pokemon. Make sure you spelled it correctly. The first letter must be capitalized.");
        console.log(Chalk.red(req.path));
    } else {
        res.send(pokemonData);
        console.log(Chalk.green(req.path));
    }
});

App.listen(port, ()=> {
    console.log("server running");
});