// Require Express
const Express = require("express");
// Create an instance of Express
const App = Express();
// Save the port number
const port = 80;
// Require fs
const fs = require("fs");

// Read the entire contents of the file and save it in the variable 'contents'
const contents = fs.readFileSync("database.json");
// The contents is a string.
// Parse the string into a JavaScript object
let database = JSON.parse(contents);

// We want to 'talk' across origins (protocols, domains, and ports)
// Require cors
const cors = require("cors");
// Setup a middleware of 'cors'
// All of our responses will have a CORS header
App.use(cors());

// Setup a new route (method, path, and response)
// Listen for GET method
// Listen for /shows/name/:name
// Send a response of res.json()
App.get("/shows/name/:name", (req, res) => {

    // Create default error (There must always be a response!)
    let result = {"error": "Could not find name!"};
    // Create an empty array
    // As we search, we will add to this array
    let searchArray = [];

    // Search the array
    database.forEach((value) => {
        // Use the <String>.includes() function
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
        if(value.name.includes(req.params.name)) {
            // Whatever is in :name is also in the name, so
            // add this entry (value) to the array (searchArray)
            searchArray.push(value);
        }
    });

    // Did we find anything?
    // If we did, the array will have a length greater than 0
    if(searchArray.length > 0) {
        // Set 'result' to be the array of entries found
        result = searchArray;
    }

    // Response with JSON
    // Send back either:
    //  -- 'error' object literal
    //  -- array of entries
    res.json(result);

});

// Listen on the 'port' and use a callback function
App.listen(port, () => {
    // Is the server running?
    // Let us know on the console
    console.log("Server is running!")
});
