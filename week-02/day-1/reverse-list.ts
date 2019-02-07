'use strict';

// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

//First method with using the built in reverse method
let numList: number [] = [3, 4, 5, 6, 7];
/*let reversedNumList: number [] = numList.reverse();
console.log(reversedNumList); */
//Second method with a for loop and a new array and a temporary array
let reversedNumList: number [] = [];
for (let i = numList.length-1; i >= 0; i--) {
  reversedNumList.push(numList[i]);
}
numList = reversedNumList;
console.log(numList);