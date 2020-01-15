const Cat = require("./Cat.js");

class Lion extends Cat {
    constructor(color, age, weight) {
        super(color, age);
        this.weight = weight;
    }
}

module.exports = Lion;

// Lion IS A Cat
// Lion HAS A weight
// Person (none) Lion (has no relationship to)