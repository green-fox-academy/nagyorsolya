'use strict';

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function candyCompare (a: any []) {
  let result:number = undefined;
  for (let i = 0; i < a.length; i++) {
    result = a[i].candies
    if (result > 4) {
        console.log(a[i].name + " has more than 4 candies.")
    }
  };
  return result;
};

candyCompare(students); 

function candyAverage (a: any []) {
  let sum:number = 0;
    for (let i = 0; i <a.length; i++) {
    sum += a[i].candies
  };
  return sum;
};

console.log(candyAverage(students));