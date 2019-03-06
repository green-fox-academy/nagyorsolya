"use strict";

const mapWith = (array, callback) => {
  let output = [];
  array.forEach(element => {
    output.push(callback(element));
  });

  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.

  return output;
};

const addOne = number => {
  return number + 1;
};

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ["map", "reduce", "filter"];

function removeSecondLetter(inputString) {
  let newWord = "";
  for (let i = 0; i < inputString.length; i++) {
    let k = 1;
    if ((i + k) % 2 !== 0) {
      newWord += inputString[i];
    }
  }
  return newWord;
}

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']
