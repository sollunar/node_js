const adder = require("./add.js");

const [, , number1, number2, operation] = process.argv;


if (operation === "add") {
    console.log(adder(number1, number2))
}
