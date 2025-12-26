
// const readline = require('readline');
// require seems it's on the verge of depereration. says file is not common js module. it may be converted into es module.
import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("")
console.log("========= Simple Calculator =========")
console.log("")

rl.question('Enter first number: ', (num1) => {
    // console.log(`Your first number is ${num1}`)
    rl.question('Enter operator (+, -, *, /): ', (operator) => {
        // console.log(`You choose ${operator}`);
        rl.question('Enter second number: ', (num2) => {
            // console.log(`Your second number is ${num2}`);
            console.log("");

            const a = parseFloat(num1);
            const b = parseFloat(num2);
            let result;

            switch(operator) {
                case '+': result = a + b; break;
                case '-': result = a - b; break;
                case '*': result = a * b; break;
                case '/': result = a / b; break;
                default: result = 'Invalid Operator';
            }

            console.log(`Result: ${result}`);
            rl.close()
        })
    })
});
