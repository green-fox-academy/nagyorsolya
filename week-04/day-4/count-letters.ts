'use strict';

export function dictionary(inputString: string) {
  //First I will create a string array from the inputString
  let inputStringArray: string[] = inputString.split("");
  let returnObject: object = {};
  //Then I will iterate through the array and only keep one of every character
  for (let i = 0; i < inputStringArray.length; i++) {
    if (returnObject[inputStringArray[i]]) {
      returnObject[inputStringArray[i]]++;
    }
    else {
      returnObject[inputStringArray[i]] = 1;
    }
  }
  return returnObject;
}

console.log(dictionary("alma"));