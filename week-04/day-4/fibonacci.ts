'use strict';
//Write a function that computes a member of the fibonacci sequence by a given index
//Create tests that covers all types of input (like in the previous workshop exercise)
//The function should return the fibonacci value of the the input index, so if you input 2, it should return the 3rd element of the fibonacci sequence
// [0,1,1,2,3,5,8...]

export function fibonacci (inputIndex: any) {
let fibonacciArray: number [] = [0,1];
if (typeof inputIndex  !== "number") {
  return (inputIndex + ' is not a number.');
}; 
for (let i = 2; i < inputIndex; i++) {
  fibonacciArray[i] = fibonacciArray[i-1] + fibonacciArray[i-2];
}
  return fibonacciArray[inputIndex-1];
};

console.log(fibonacci(3));