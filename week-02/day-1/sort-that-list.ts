'use strict';

//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

//  Example:
console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]

function bubble(array: number[]): number[] {
  array = array.slice(); // creates a copy of the array
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {

      if (array[j] > array[j + 1]) {
        let swap = array[j];
        array[j] = array[j + 1];
        array[j + 1] = swap;
      }
    }
  }
  return array;
} 

function advancedBubble (array: number[], isTrue: boolean): number[] {
  array = array.slice(); // creates a copy of the array
  if (isTrue) {
  for (let i = 0; i < array.length; i++) {
    for (let j = array.length-1 ; j > 0; j--) {

      if (array[j] > array[j - 1]) {
        let swap = array[j];
        array[j] = array[j - 1];
        array[j - 1] = swap;
      }
    }
  }
}
else if (!isTrue) {
 array = bubble(array);
}
  return array;
}