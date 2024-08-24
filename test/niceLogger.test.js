var {niceLogger, messageRepeater} = require("../src/niceLogger.js");

// Import the file
// const niceLogger = require("../src/niceLogger.js");
// Import a specific function from the file
// const niceLoggerFunction = niceLoggerFile.niceLogger;

describe("niceLogger function tests", () => {
    test("niceLogger returns Hello world!", () => {

        expect(niceLogger()).toBe("Hello world!");
    });

    test("niceLogger returns Hello world!", () => {

        niceLogger = jest.fn();

        niceLogger.mockReturnValue("Hello world!");

        expect(niceLogger()).toBe("Hello world!");
    });
})

describe("messageRepeater function tests", () => {
    test("messageRepeater repeats the message successfully.", () => {
        let repeatedMessage = messageRepeater("hello");

        expect(repeatedMessage).toBe("hellohellohello");
        expect(repeatedMessage).toHaveLength(15);
    })

    test("messageRepeater repeats the numbers correctly.", () => {
        let repeatedMessage = messageRepeater(1);

        expect(repeatedMessage).toBe("111");
        expect(repeatedMessage).toHaveLength(3);
    })

    test("messageRepeater repeats the arrays correctly.", () => {
        let repeatedMessage = messageRepeater(["hello", "world"]);
        console.log(repeatedMessage);
        expect(repeatedMessage).toEqual(["hello", "world", "hello", "world", "hello", "world"]);
        expect(repeatedMessage).toHaveLength(6);
    })
})
