'use strict';
export { }

let fs = require('fs');

function reverseLines(inputFile) {
  let content = "";
  content = fs.readFileSync(inputFile, "utf-8").replace("\r","")
  let contentArray: any = content.split('\n');
  let result: string[] = [];

  for (let i = 0; i < contentArray.length; i++) {
    result[i] = "";
    if (contentArray[i] !== "\r" && contentArray[i].length != 0) {
      for (let j = 0; j < contentArray[i].length; j++) {
        result[i] += contentArray[i][contentArray[i].length - 1 - j];
      }
    }
  }
  let output = result.join("");
  console.log(output);
};

reverseLines("reversed-lines.txt");