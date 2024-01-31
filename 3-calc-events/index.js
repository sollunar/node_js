const adder = require('./add.js');


const [, , num1, num2, operation] = process.argv;

if (operation === 'add') {
    adder(num1, num2)
} else {
   console.log("To perform add input: node index.js num1 num2 add")
}

