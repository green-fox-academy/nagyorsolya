'use strict';

let fs = require ('fs');

// There is a not so family friendly text in the `content.txt`
// Create a function named familyFriendlizer that takes a filename and a list of strings as parameters
// and remove all the given words from the file and returns the amount of the removed words.

let offensiveWords: string[] = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss'];

function familyFriendlizer (inputFile: any, inputArray:string []) {
  let content: string = fs.readFileSync(inputFile, "utf-8");
  let contentArray: any [] = content.split(".");
  let goodContent: any [] = [];
  let removedWords = [];
  for (let i:number = 0; i < contentArray.length; i++) {
  goodContent.push(contentArray[i].split(" "))
  }
  //console.log(goodContent);
  for (let i = 0; i < goodContent.length; i++) {
      for (let j = 0; j < goodContent[i].length; j++) {
        if (goodContent[i][j] === offensiveWords[0] || goodContent[i][j] === offensiveWords[1] || goodContent[i][j] === offensiveWords[2] || goodContent[i][j] === offensiveWords[3]
             || goodContent[i][j] === offensiveWords[4] || goodContent[i][j] === offensiveWords[5] || goodContent[i][j] === offensiveWords[6] || goodContent[i][j] === offensiveWords[7]
             || goodContent[i][j] === offensiveWords[8]) {
               removedWords.push(goodContent.splice([i][j], 1))
             }
      }
  }
  console.log(removedWords);
}
  /*content.toLowerCase;
  for (let i: any = 0; i < offensiveWords.length; i++) {
    content.replace(i, "*");
  }
  console.log(content);
  let contentArray: any [] = content.split(" ");
  let removedWords = [];
  for (let i: number = 0; i < contentArray.length; i++) {
    if (contentArray[i] === "*") {
      removedWords.push(contentArray.splice(i,1))
    }
  }
  console.log(removedWords.length);
  }; */

familyFriendlizer("content.txt", offensiveWords);
//console.log(familyFriendlizer('content.txt', offensiveWords)); // should print out 17