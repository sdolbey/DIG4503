const Express = require("express");
const App = Express();
const port = 8080;
const Person = require("./Person.js");

let p = new Person("Dan", "magenta");

App.get("/", function(Request, Response) {
    console.log("I got a request uwu");
    Response.send(p.getColor());
})

App.get("/beep", function(Request, Response) {
    console.log("I got a request uwu");
    Response.send("boop");
})

App.listen(port, function() {
    console.log("beep beep the server is running");
})