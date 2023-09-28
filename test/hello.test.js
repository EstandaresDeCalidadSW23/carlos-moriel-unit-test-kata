const hello = require("../src/hello");

test("should say hello to given name", function () {
    // setup
    const name = "Benjamin";

    // execute
    const result = hello(name);

    // expectations
    expect(result).toEqual("Hello Benjamin!");
});