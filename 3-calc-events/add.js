const Emitter = require("events")

const myEmitter = new Emitter();

myEmitter.on('add', (num1, num2) => {
    myEmitter.emit('result', Number(num1) + Number(num2))
})

myEmitter.on('result', (result) => {
    console.log(result)
})

function adderEvent(num1, num2) {
    myEmitter.emit('add', num1, num2)
}

module.exports = adderEvent;
