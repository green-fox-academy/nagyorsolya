'use strict';

import { fileURLToPath } from "url";

let fs = require('fs');

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

function writeName(newtext) {
  try {
    fs.readFileSync('my-file.txt', 'utf-8');
    fs.writeFileSync('my-file.txt', newtext);
  }
  catch (error) {
    console.log("Unable to write file: my-file.txt");
  }
};

writeName('Nagy Orsi');

