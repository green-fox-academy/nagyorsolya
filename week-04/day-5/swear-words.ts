'use strict';

let fs = require ('fs');

// There is a not so family friendly text in the `content.txt`
// Create a function named familyFriendlizer that takes a filename and a list of strings as parameters
// and remove all the given words from the file and returns the amount of the removed words.

let offensiveWords: string[] = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss'];

function familyFriendlizer (inputFile: any, inputArray:string []) {
  let content: string = fs.readFileSync(inputFile, "utf-8");
  content = content.toLowerCase();
  let contentArray: string [] = content.split(" ");
  let counter: number = 0;
  for (let i: number = 0; i < contentArray.length; i++) {
    for (let j: number = 0; j < offensiveWords.length; j++) {
      if (contentArray[i].split(".").join("").split(",").join("") === offensiveWords[j]) {
        counter++;
      }
    }
   }
   return counter;
  }

  console.log(familyFriendlizer("content.txt", offensiveWords));