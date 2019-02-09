'use strict';

const matrix: number[][] = [
  [1, 2, 3, 11],
  [4, 5, 6, 12],
  [7, 8, 9, 13],
  [16, 15, 17, 18]
]

function rotateMatrix (inputMatrix: number [][]) {
  let returnValue: number [][] = [];
  for (let i:number = 0; i < inputMatrix.length; i++) {
    returnValue.push([]);
  }
for (let i: number = 0; i < inputMatrix.length; i++) {
  for (let j: number = 0; j < inputMatrix.length; j++) {
    returnValue[i][j] = inputMatrix[inputMatrix.length-j-1][i];
  }
}
return returnValue;
};

console.log(rotateMatrix(matrix));