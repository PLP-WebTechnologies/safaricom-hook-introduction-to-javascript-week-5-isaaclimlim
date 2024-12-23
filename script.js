/* 1. Variables and Data Types */
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

/* 2. Operators */

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


/* 3. Functions */
const greetings = document.querySelector('h4');
greetings.innerHTML = greetUser('John Lema');
 function greetUser(name) {
    return `Hello ${name}, Welcome to Programming!`;
 }

 /* Part 2: JavaScript Control Structures
            2.1:If Statements */
const vote = document.querySelector('h2');
vote.innerHTML = eligibleToVote();
function eligibleToVote() {
    const age = Number(prompt('Enter your age: '));
    if (age >= 18) {
        return 'You are eligible to vote';
    } else {
        return 'You are not eligible to vote';
    }
}



/* List-of-numbers */
const numbers = document.getElementById('List');
numbers.innerHTML = countNumbers();
function countNumbers() {
    for (let i=1; i<=10; i++) {
        const newList = document.createElement('li');
        newList.textContent = i;
        numbers.appendChild(newList);
        
    }
}

/* INTRODUCTION TO DOM */
/* Selecting and Modifying HTML Elements */

const heading = document.querySelector('h1');
heading.textContent = 'Javascript in Action!';

const newParagraph = document.getElementById('dynamic-content');
const paragraph = document.createElement('p');
paragraph.innerHTML = 'This content was added dynamically using JavaScript.';
newParagraph.appendChild(paragraph);






 





