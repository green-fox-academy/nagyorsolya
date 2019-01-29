'use strict';

import { fileURLToPath } from "url";

let fs = require('fs');

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.


function webBrowser () {
  try {
let fileContent = fs.readFileSync("log.txt", "utf-8");
let arr1 = fileContent.match(/(\d+\.\d+\.\d+\.\d+)/g);
let addresses: any = [];

for (let i = 0; i < arr1.length; i++) {
  if (i % 9 === 0) {
addresses.push(arr1[i]);
  }
}
console.log(addresses);
  }
  catch (error) {
    console.log(error.message);
  }
};

webBrowser();