const { availableOperations, calculatorEmmiter } = require("./calculator.js");

const [, , num1, num2, operation] = process.argv;

if (process.argv.length !== 5) {
  console.log("Incorrect number of arguments! Arguments must be: num num operation");
  return;
}

if (!availableOperations.includes(operation)) {
  console.log(`Available operations are: ${availableOperations.join(", ")}`);
  return;
}

if (isNaN(num1) || isNaN(num2)) {
  console.log("Arguments can only be valid numbers");
  return;
}

calculatorEmmiter.emit(operation, parseFloat(num1), parseFloat(num2));
