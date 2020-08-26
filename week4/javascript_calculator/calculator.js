const readline = require("readline-sync")

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  let wholeNumber = num1 / num2;
  let remainder = num1 % num2;
  let answer = `${Math.floor(wholeNumber)} Remainder: ${remainder}`;    
  return answer;
}

function subtract(num1, num2) {
  return num1 - num2;
}
//var userName = readline.question('May I have your name? ');
//console.log('Hi ' + userName + '!');
var num1 =parseInt(readline.question('Please enter your first number '));
console.log(num1)
var num2 =parseInt(readline.question('Please enter your second number '));
console.log(num2);
var operation =readline.question('what operation do you wish to perform Add/Subtract/Multiply/Divide ');
switch(operation){
  
  case 'add':
    console.log(`The result is: ${(add(num1, num2))}`)
    break;
    case 'subtract':
    console.log(`The result is: ${(subtract(num1, num2))}`)
    break;
    case 'multiply':
    console.log(`The result is: ${(multiply(num1, num2))}`)
    break;
    case 'divide':
    console.log(`The result is: ${(divide(num1, num2))}`)
    break;
    default:
      console.log("please try again")
    

} 
