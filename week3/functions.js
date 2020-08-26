// Exercise 1.
function sum(numOne, numTwo) {
  return numOne + numTwo
}
var result = sum(27, 35);
console.log(result);


// Exercise 2.
function largestNum(num1, num2, num3){
  if (num1 > num2 && num1 > num3) {
      return num1 + ' is the largest number'
  } else if (num2 > num1 && num2 > num3) {
      return num2 + ' is the largest number'
  } else {
      return num3 + ' is the largest number'
  }
}
var largestNumber = largestNum(100, 311, 20);
console.log(largestNumber);


// Exercise 3.
function evenOrOdd(num) {
  if (num % 2 == 0) {
      return num + ' is even';
  } else {
      return num + ' is odd';
  }
}
var isEvenOrOdd = evenOrOdd(13);
console.log(isEvenOrOdd);


// Exercise 4.
function stringFunc(str) {
  if (str.length <= 20) {
      return str + str;
  } else {
      return str.slice(0, 11)
  }
}
var stringResult = stringFunc('Hi there my name is carlton tartt');
console.log(stringResult);
