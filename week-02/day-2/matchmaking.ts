'use strict';
export { }
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

var girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
var boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(a: string[], b: string[]) {
    let newarray: string[] = [];
    for (var i = 0; i <b.length; i=i+2) {

            newarray.splice(i, 0, girls[i]);
            newarray.splice(i + 1, 0, boys[i]);

        var output = newarray;
    }
    return output;
}
console.log(makingMatches(girls, boys)); 

/* function makingMatches(bojok: string[], lyanyok: string[]) {
    let newarray: string[] = [];
    for (let i = 0; i < bojok.length; i++) {
        if (lyanyok[i] !== undefined && bojok[i] !== undefined) {

            newarray[i] = bojok[i] + ', ' + lyanyok[i];
        }

        else {
            newarray[i] = bojok[i];
        }
    }
    return newarray;
}

console.log(makingMatches(boys, girls));  */
