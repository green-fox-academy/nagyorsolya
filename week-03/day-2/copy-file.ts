'use strict';

import { fileURLToPath } from "url";

let fs = require('fs');

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

function copyContent (writeFrom: string, writeTo: string) {
try {
let content1 = fs.readFileSync(writeFrom, "utf-8")
fs.appendFileSync(writeTo, content1);
  console.log(true);
}
catch (error) {}
};

copyContent ("my-file.txt", "untitled.txt");