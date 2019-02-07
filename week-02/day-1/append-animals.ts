'use strict';
// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals: string[] = ["koal", "pand", "zebr"];

/*let animals1 = animals.forEach(function (value) {
  return value += "a";
})

console.log(animals1); */

let animals2 = animals.map(function (item) {
  return item += "a";
})

console.log(animals2);

//It's not working with forEach

/*let animals1 = animals.forEach(function (value) {
  return value += "a";
})

console.log(animals1); */