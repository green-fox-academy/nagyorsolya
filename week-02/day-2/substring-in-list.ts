'use strict';

//  Create a function that takes a string and a list of string as a parameter
//  Returns the index of the string in the list where the first string is part of
//  Only need to find the first occurence and return the index of that
//  Returns `-1` if the string is not part any of the strings in the list

function substrlist(inputString: string, inputStringArray: string[]): number {
  for (let i: number = 0; i < inputStringArray.length; i++) {
    if (inputStringArray[i].indexOf(inputString) >= 0) {
      return i;
    }
  }
  return -1;
};

//  Example
console.log(substrlist('ching', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
//  should print: `4`
console.log(substrlist('not', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
//  should print: `-1`