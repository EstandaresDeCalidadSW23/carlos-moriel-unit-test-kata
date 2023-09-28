const hello = require("../src/hello");

test("should say hello to given name", function () {
    // setup
    const name = "Benjamin";

    // execute
    const result = hello(name);

    // expectations
    expect(result).toEqual("Hello Benjamin!");
});

test("should say 'Hello World!' when no name is provided", function () {
    // setup
    const expected = "Hello World";

    // execute
    const result = hello();

    // expectations
    expect(result).toEqual(expected);
});

test("should say hello to given name", function () {
    // setup
    const name = "Carlos";

    // execute
    const result = hello(name);

    // expectations
    expect(result).toEqual("Hello Carlos!");
});