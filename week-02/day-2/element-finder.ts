'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

//This solution is not good because it will only give back the value of the last element
/*function containsSeven(a: number[]) {
  let result = undefined;
  for (let i = 0; i < a.length; i++) {

    result = a[i] === 7
  };
  if (result === true) {
    console.log("Hoorray");
  }
  else {
    console.log("Noooooo");
  };
}; */

function containsSeven(a: number[]) {
  let result: boolean = undefined;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 7) {
      result = true;
    };
  };

  if (result) {
    console.log("Hoorray");
  }
  else {
    console.log("Nooooo");
  }
};

containsSeven(numbers);