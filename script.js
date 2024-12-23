/* Variables and Data Types */
const myName = 'Isaac Z. Schlueter';
let age = 22;
let country = 'Germany';
const haveID = true;

const myInfo = {
    name: myName,
    age: age,
    country: country,
    citizenship: haveID? 'by birth' : 'not by birth'
}

console.log(`My name is ${myName}:`);
console.log(`I am ${age}`);
console.log(`I am from ${country}`);

if (haveID === true) {
    console.log('I have citizenship by birth');
} else {
    console.log('I am not a citizen by birth');
}

console.log(myInfo)

/* Operators */
 
const num1 = Number(prompt('Enter the first number: '));
const num2 = Number(prompt('Enter the second number: '));
const operator = prompt('Enter the operator (+, -, *, /): ');


if (operator === '+') {
    console.log(`First number: ${num1}`);
    console.log(`Second number: ${num2}`);
    console.log(`Operator choosen: ${operator}`);
    const result = num1 + num2;
    console.log(`Result: ${result}`);
} else if (operator === '-') {
    console.log(`First number: ${num1}`);
    console.log(`Second number: ${num2}`);
    console.log(`Operator choosen: ${operator}`);
    const result = num1 - num2;
    console.log(`Result: ${result}`);
} else if (operator === '*') {
    console.log(`First number: ${num1}`);
    console.log(`Second number: ${num2}`);
    console.log(`Operator choosen: ${operator}`);
    const result = num1 * num2;
    console.log(`Result: ${result}`);
} else {
    console.log(`First number: ${num1}`);
    console.log(`Second number: ${num2}`);
    console.log(`Operator choosen: ${operator}`);
    const result = num1 / num2;
    console.log(`Result: ${result}`);
}





