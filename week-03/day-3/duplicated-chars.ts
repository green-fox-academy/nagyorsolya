'use strict';
export {}

let fs = require('fs');


  function charDecoder (inputFile) {
    let content: string = "";
    let contentarray: any [] = [];

    content = fs.readFileSync(inputFile, "utf-8").replace("\n","")
    
    for (let i = 0; i < content.length; i++) {
      if (i % 2 === 0) {
        contentarray.push(content[i]);
      }
    }

    let output = contentarray.join("")
    console.log(output);
    return output;
  }
  charDecoder("duplicated-chars.txt");