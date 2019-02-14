'use strict';
/*Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
Create a test for that.*/

let string1: string = "brainy";
let string2: string = "binary";

export function isAnagram(firstWord: string, secondWord: string) {
  let answer: boolean = true;
  //In the function isAnagram first I will alphabetize the letters by converting them to arrays
  let firstWordArray: string[] = firstWord.split("");
  let secondWordArray: string[] = secondWord.split("");
    firstWordArray = firstWordArray.sort();
    secondWordArray = secondWordArray.sort();
  let firstResult: string = firstWordArray.join();
  let secondResult: string = secondWordArray.join();

  if (firstResult === secondResult) {
    answer = true;
  }
  else {
    answer = false;
  }
  return answer;
};

console.log(isAnagram(string1, string2));