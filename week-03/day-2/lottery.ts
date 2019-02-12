'use strict';

let fs = require('fs');

let content: string = fs.readFileSync("lottery.txt", "utf-8");
let contentArray: string[] = content.split("\r\n");
let justTheNumbers: string[] = [];

//This will split the rows by ; and then take off the last 5 items and push them into new arrays
let theNumbers: string[][] = contentArray.map(function (row) {
  let splittedRow: string[] = row.split(";");
  let resultArray: string[] = [];
  for (let i: number = 0; i < 5; i++) {
    resultArray.push(splittedRow.pop());
  }
  return resultArray;
})

//This will create only one array from the multi-dimensional array with only the numbers
for (let i: number = 0; i < theNumbers.length; i++) {
  for (let j: number = 0; j < theNumbers[j].length; j++) {
    justTheNumbers.push(theNumbers[i][j]);
  }
}
console.log(justTheNumbers);

//This will find the most common character
    let mf = 1;
    let m = 0;
    let item: string = "";

for (let i = 0; i < justTheNumbers.length; i++) {
  for (let j = i; j < justTheNumbers.length; j++) {
    if (justTheNumbers[i] == justTheNumbers[j]) {
      m++;
    }
    if (mf < m) {
      mf = m;
      item = justTheNumbers[i];
    }
  }
  m = 0;
}
console.log("The most common character is " + item + " (" + mf + " times).");



/*let newContentArray: string [] = [];
let clearContentArray: string [] = [];

for (let i: number = 0; i < contentArray.length; i++) {
  if (i % 4 === 0) {
    newContentArray.push(contentArray[i]);
  }
}
for (let i: number = 0; i < newContentArray.length; i++) {
  clearContentArray.push(newContentArray[i].replace("\r", " "));
  }
for (let i: number = 0; i < newContentArray.length; i++) {

}*/