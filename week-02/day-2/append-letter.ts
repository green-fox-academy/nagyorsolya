'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

//First solution with loops

function appendA(a: string []) {
 for (let i = 0; i < a.length; i++)
  a[i] = a[i] + "a";
  return a;
};

console.log(appendA(far));

/*console.log(appendA(far)); */

// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'

//This is another valid solution with forEach

/*far.forEach((element, index) => far[index] = element + 'a');
console.log(far); */
