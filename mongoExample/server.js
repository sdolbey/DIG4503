const Express = require('express');
const App = Express();
const port = 80;
const Database = require("./database.js");

let database = new Database();

App.get("/movies/name/:name", (req, res) => {

});

App.get("/movies/score/:score", (req, res) => {
  let result = {"error": "oopsie woopsie uwu"};

  let movie = database.findScore(req.params.score);

  if(movie != null) {
    result = movie;
  }

  res.json(result);
});

App.listen(port, () => {

});