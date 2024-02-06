const Emitter = require("events");

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

const availableOperations = Object.keys(operations);

const calculatorEmmiter = new Emitter();

availableOperations.forEach((operation) =>
  calculatorEmmiter.on(operation, (num1, num2) => {
    calculatorEmmiter.emit("result", operations[operation](num1, num2));
  }),
);

calculatorEmmiter.on("result", (result) => {
  console.log(result);
});

module.exports = { calculatorEmmiter, availableOperations };
