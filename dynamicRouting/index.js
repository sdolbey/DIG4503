const Express = require("express");
const App = Express();
const port = 80;

const Person = require("./Person.js");
let people = [];
const faker = require("faker");

for(let i = 0; i < 99; i++) {
    let name = faker.name.findName();
    let color = faker.commerce.color();
    people.push(new Person(name, color))
}

console.log(people);


//You can use js filter or map instead of for each loops
App.get("/person/name/:name", (req, res) => {
    people.forEach((value)=> {
        if(value.name == req.params.name) {
            res.send(value);
        }
    });
    res.send("very sad and brave");
});


App.get("/person/color/:color", (req, res) => {
    people.forEach((value)=> {
        if(value.color == req.params.color) {
            res.send(value);
        }
    });
    res.send("very sad and brave");
});

App.listen(port, ()=> {
    console.log("Server running");
})