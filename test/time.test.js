const time = require("../src/time");
const MINUTES_IN_SECONDS = 60;
const HOURS_IN_SECONDS = 60 * MINUTES_IN_SECONDS;
const DAYS_IN_SECONDS = 24 * HOURS_IN_SECONDS;
const WEEKS_IN_SECONDS = 7 * DAYS_IN_SECONDS;
const YEARS_IN_SECONDS = 365 * DAYS_IN_SECONDS;

test("should return '0s' for 0 seconds", function () {
    // setup
    const seconds = 0;

    // execute
    const result = time(seconds);

    // expectation
    expect(result).toEqual("0s");
});

test("should return '1s' for 1 second", function () {
    // setup
    const seconds = 1;

    // execute
    const result = time(seconds);

    // expectation
    expect(result).toEqual("1s");
});

test("should return '2s' for 2 seconds", function () {
    // setup
    const seconds = 2;

    // execute
    const result = time(seconds);

    // expectation
    expect(result).toEqual("2s");
});

test("should return '59s' for 59 seconds", function () {
    // setup
    const seconds = 59;

    // execute
    const result = time(seconds);

    // expectation
    expect(result).toEqual("59s");
});


test("should return '1m' for 60 seconds", function () {
    // setup
    const seconds = MINUTES_IN_SECONDS;

    // execute
    const result = time(seconds);

    // expectation
    expect(result).toEqual("1m");
});

test("should return '2m' for 120 seconds", function () {
    // setup
    const seconds = 120;

    // execute
    const result = time(seconds);

    // expectation
    expect(result).toEqual("2m");
});

test("should return '59m' for 59 minutes", function () {
    // setup
    const seconds = 59 * MINUTES_IN_SECONDS;

    // execute
    const result = time(seconds);

    // expectation
    expect(result).toEqual("59m");
});

test("should return '1h' for 3600 seconds", function () {
    // setup
    const seconds = HOURS_IN_SECONDS;

    // execute
    const result = time(seconds);

    // expectation
    expect(result).toEqual("1h");
});

test("should return '23h' for 23 hours", function () {
    // setup
    const seconds = HOURS_IN_SECONDS * 23;

    // execute
    const result = time(seconds);

    // expectation
    expect(result).toEqual("23h");
});

test("should return '1d' for 24 hours", function () {
    // setup
    const seconds = DAYS_IN_SECONDS;

    // execute
    const result = time(seconds);

    // expectation
    expect(result).toEqual("1d");
});

test("should return '6d' for 6 days", function () {
    // setup
    const seconds = DAYS_IN_SECONDS * 6;

    // execute
    const result = time(seconds);

    // expectation
    expect(result).toEqual("6d");
});

test("should return '1w' for 7 days", function () {
    // setup
    const seconds = WEEKS_IN_SECONDS;

    // execute
    const result = time(seconds);

    // expectation
    expect(result).toEqual("1w");
});

test("should return '2w' for 14 days", function () {
    // setup
    const seconds = WEEKS_IN_SECONDS * 2;

    // execute
    const result = time(seconds);

    // expectation
    expect(result).toEqual("2w");
});

test("should return '1y' for 365 days", function () {
    // setup
    const seconds = YEARS_IN_SECONDS;

    // execute
    const result = time(seconds);

    // expectation
    expect(result).toEqual("1y");
});

test("should return '2y' for 2 years", function () {
    // setup
    const seconds = YEARS_IN_SECONDS * 2;

    // execute
    const result = time(seconds);

    // expectation
    expect(result).toEqual("2y");
});

test("should return '1m 20s' for 80 seconds", function () {
    // setup
    const seconds = 80;

    // execute
    const result = time(seconds);

    // expectation
    expect(result).toEqual("1m 20s");
});

test("should return '1h 30m' for 1.5 hours", function () {
    // setup
    const seconds = HOURS_IN_SECONDS * 1.5;

    // execute
    const result = time(seconds);

    // expectation
    expect(result).toEqual("1h 30m");
});

test("should return '2h 25m 30s' for 2 hours, 25 minutes and 30 seconds", function () {
    // setup
    const seconds = HOURS_IN_SECONDS * 2 + MINUTES_IN_SECONDS * 25 + 30;

    // execute
    const result = time(seconds);

    // expectation
    expect(result).toEqual("2h 25m 30s");
});

test("should return '1y 2w 3d 4h 5m 6s' for 1 year, 2 weeks, 3 days, 4 hours, 5 minutes and 6 seconds", function () {
    // setup
    const seconds = YEARS_IN_SECONDS + 2 * WEEKS_IN_SECONDS + 3 * DAYS_IN_SECONDS + 4 * HOURS_IN_SECONDS + 5 * MINUTES_IN_SECONDS + 6;

    // execute
    const result = time(seconds);

    // expectation
    expect(result).toEqual("1y 2w 3d 4h 5m 6s");
});

test("should return '2y' for 2 * YEARS_IN_SECONDS + 5 * DAYS_IN_SECONDS + 3 * HOURS_IN_SECONDS", function () {
    // setup
    const seconds = 2 * YEARS_IN_SECONDS + 5 * DAYS_IN_SECONDS + 3 * HOURS_IN_SECONDS;

    // execute
    const result = time(seconds);

    // expectation
    expect(result).toEqual("2y");
});

test("should return '3y 1w 3d' for 3 * YEARS_IN_SECONDS + WEEKS_IN_SECONDS + 3 * DAYS_IN_SECONDS + 59", function () {
    // setup
    const seconds = 3 * YEARS_IN_SECONDS + WEEKS_IN_SECONDS + 3 * DAYS_IN_SECONDS + 59;

    // execute
    const result = time(seconds);

    // expectation
    expect(result).toEqual("3y 1w 3d");
});