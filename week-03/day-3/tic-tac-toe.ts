'use strict';
export{}

let fs = require('fs');

// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file

//First I need to convert the .txt files to a variable and "upload" them to the multidimensional array
/*let content: string = "";
let contentarray: string [] = [];
let newarray: any [][] = [];
content = fs.readFileSync("win-o.txt", "utf-8");
contentarray = content.split("");
contentarray.splice(3,2);
contentarray.splice(6,2);
let size = 3;

for (let i = 0; i < size; i++) {
  newarray[i] = [];
  for (let j = 0; j < size; j++) {
      newarray[i][j] = contentarray[i+j];
      if (i === 1) {
        newarray[i][j] = contentarray[i+j+2];
      }
      else if (i === 2) {
        newarray[i][j] = contentarray[i+j+4];
      }
  }
}; */

//Second, we need to iterate through the arrays and check the elements

function ticTacResult(inputFile) {

  let content: string = "";
  let contentarray: string [] = [];
  let inputArray: any [][] = [];
  content = fs.readFileSync(inputFile, "utf-8");
  contentarray = content.split("");
  contentarray.splice(3,2);
  contentarray.splice(6,2);
  let size = 3;
  
  for (let i = 0; i < size; i++) {
    inputArray[i] = [];
    for (let j = 0; j < size; j++) {
      inputArray[i][j] = contentarray[i+j];
        if (i === 1) {
          inputArray[i][j] = contentarray[i+j+2];
        }
        else if (i === 2) {
          inputArray[i][j] = contentarray[i+j+4];
        }
    }
  };

  let isThereAWinner: boolean = false;

  for (let i = 0; i < inputArray.length; i++) {
             //This is for the horizontal lines
        if (inputArray[i][0] === inputArray[i][1] && inputArray[i][0] === inputArray [i][2] && inputArray[i][0] === "X") {
          isThereAWinner = true;
          console.log("X wins!");
        }
        else if (inputArray[i][0] === inputArray[i][1] && inputArray[i][0] === inputArray [i][2] && inputArray[i][0] === "O") {
          isThereAWinner = true;
          console.log("O wins!");
        }
        // This is for the vertical lines
        if (inputArray[0][i] === inputArray[1][i] && inputArray[0][i] === inputArray[2][i] && inputArray[0][i] === "X") {
          isThereAWinner = true;
          console.log("X wins!");
        } 
        else if (inputArray[0][i] === inputArray[1][i] && inputArray[0][i] === inputArray[2][i] && inputArray[0][i] === "O") {
          isThereAWinner = true;
          console.log("O wins!");
        }
        //This is for the diagonals
        if (i === 0 && inputArray[i][0] === inputArray[i+1][1] && inputArray[i][0] === inputArray[i+2][2] && inputArray[i][0] === "X") {
          isThereAWinner = true;
          console.log("X wins!");
        }
        else if (i === 0 && inputArray[i][0] === inputArray[i+1][1] && inputArray[i][0] === inputArray[i+2][2] && inputArray[i][0] === "O") {
          isThereAWinner = true;
          console.log("O wins!");
        }
        if (i === 0 && inputArray[i][2] === inputArray[i+1][i+1] && inputArray[i][2] === inputArray[2][i] && inputArray[i][2] === "X") {
          isThereAWinner = true;
          console.log("X wins!");
        }
        else if (i === 0 && inputArray[i][2] === inputArray[i+1][i+1] && inputArray[i][2] === inputArray[2][i] && inputArray[i][2] === "O") {
          isThereAWinner = true;
          console.log("O wins!");
        }
    }
    if (!isThereAWinner) {
      console.log("It's a draw!");
    }
  };

  ticTacResult("draw.txt");

   /* // Then we need to establish if statements for the different scenarios
    //This will be for the vertical lines
      if (a[i][j] === a[i][j + 1] && a[j] === a[j + 2] && a[j] === "x") {
        
        console.log("X wins!");

      }
      else if
}
  //This will be for the horizontal lines

  //And this will be for the diagonals

console.log(ticTacResult('win-o.txt'))
// Should print "O"

console.log(ticTacResult('win-x.txt'))
// Should print "X"

console.log(ticTacResult('draw.txt'))
// Should print "Draw" */