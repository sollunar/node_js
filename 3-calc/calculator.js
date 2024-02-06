const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

function calculate(num1, num2, operation) {
  return operations[operation](num1, num2);
}

const availableOperations = Object.keys(operations);

module.exports = { availableOperations, calculate };
