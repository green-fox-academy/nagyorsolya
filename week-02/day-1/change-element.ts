'use strict';
// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numlist: number [] = [1, 2, 3, 8, 5, 6];

numlist = numlist.map(function(value, index) {
  return value = index + 1;
})

console.log(numlist);
