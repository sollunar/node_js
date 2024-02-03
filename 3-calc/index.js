const { availableOperations, calculate } = require("./calculator.js");

const [, , num1, num2, operation] = process.argv;

if (!availableOperations.includes(operation)) {
  console.log(`Available operations are: ${availableOperations.join(", ")}`);
  return;
}

if (isNaN(num1) || isNaN(num2)) {
  console.log("Arguments can only be valid numbers");
  return;
}

console.log(calculate(parseFloat(num1), parseFloat(num2), operation));
