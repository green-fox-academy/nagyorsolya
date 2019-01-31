// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file

//First I need to convert the .txt files toa variable and "upload" them to the multidimensional array

//Second, we need to iterate through the arrays and check the elements
function ticTacResult() {
  for (let i = 0; i < amobaarray.length; i++)
    for (let j = 0; j < a[j].length; i++)

    // Then we need to establish if statements for the different scenarios
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
// Should print "Draw"