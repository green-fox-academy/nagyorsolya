'use strict';

// create a function that takes a list of students and logs: 
// - How many candies are owned by students altogether

// create a function that takes a list of students and logs:
// - The sum of the age of people who have less than 5 candies

var test =  {name: "Orsi", age: 27, candies:22};
const students: any[] = [
    {name: 'Theodor', age: 3, candies: 2},
    {name: 'Paul', age: 9.5, candies: 2},
    {name: 'Mark', age: 12, candies: 5},
    {name: 'Peter', age: 7, candies: 3},
    {name: 'Olaf', age: 12, candies: 7},
    {name: 'George', age: 10, candies: 1}
  ];
 /*console.log(test.candies); */

function sumcandy(a: any [][], key) {
    let result = ""
for (let i = 0;i<a[i].length;i++) {
        result += a[i][2].key;
    };
    let final = result;
    return final;
}

console.log(sumcandy(students, candies));