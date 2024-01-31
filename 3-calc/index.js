const adder = require("./add.js");

const [, , number1, number2, operation] = process.argv;


if (operation === "add") {
    console.log(adder(number1, number2))
} else {
    console.log("To perform add input: node index.js num1 num2 add")
}
