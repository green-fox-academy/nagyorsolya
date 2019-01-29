'use strict';

import { fileURLToPath } from "url";

let fs = require('fs');

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

function countLines (fileName) { 
  try {
let fileContent = fs.readFileSync(fileName, 'utf-8');
let sentence: any [] = fileContent.split("\n");
  if (fileContent) {
console.log(sentence.length);
}
  else {
  console.log('0');
}
  }
  catch (e) {
  }
};

countLines('my-file.txt');