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

class Something {
  name: string;
  value: number;
  constructor (newName: string, newValue: number) {
    this.name = newName;
    this.value = newValue;
  }
}

function countFiveMostCommon () {
  let returnArray = {};
  this.justTheNumbers.forEach(number => {
    if (justTheNumbers[number]) {

    }
  })

}


console.log(countFiveMostCommon());

let pagesByAuthor: Object = {};
this.listOfBooks.forEach(book => {
  if (pagesByAuthor[book.author]) {
    pagesByAuthor[book.author] += book.numOfPages;
  } else {
    pagesByAuthor[book.author] = book.numOfPages;
  }
});
let sortedNumberOfPages: any[] = Object.keys(pagesByAuthor).map(author => {
  return {
    author,
    pages: pagesByAuthor[author]
  };
}).sort((a, b) => b.pages - a.pages);
return sortedNumberOfPages[0].author;
}
};