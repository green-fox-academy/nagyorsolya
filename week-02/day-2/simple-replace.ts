'use strict';

let example: string = 'In a dishwasher far far away';

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away

console.log(example.replace("dishwasher","galaxy"));

function modifier(a: string) {
a = a.replace("dishwasher","galaxy");
return a;
}

console.log(modifier(example));
