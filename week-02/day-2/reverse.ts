'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!


//This is the first method
let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';
let test: string = "Hello Blanka"

let newString = "";
function reverseAString (a: string) {
for (var i = a.length - 1; i >= 0; i--) { 
    newString += a[i];
}
return newString;
}

console.log(reverseAString(reversed));

//This is the second method
function reverseAString2 (a: string) {
    let array1: string [] = a.split("");
    array1 = array1.reverse();
    let output: string = array1.join("");
    return output;

}

console.log(reverseAString2(reversed));

