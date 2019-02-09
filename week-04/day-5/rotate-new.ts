'use strict';

const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

function rotateMatrix (inputMatrix: number [][]) {
for (let i: number = 0; i < inputMatrix.length; i++) {
  for (let j: number = 0; j < inputMatrix.length; j++) {
    inputMatrix[i][j] = inputMatrix[inputMatrix.length-j-1][i];
  }
}
return inputMatrix;
};

console.log(rotateMatrix(matrix));

