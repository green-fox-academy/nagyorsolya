'use strict';

const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

function rotateMatrix (inputMatrix: number [][]) {
for (let i: number = 0; i < inputMatrix.length; i++) {
  for (let j: number = 0; i < inputMatrix.length; i++) {
      for (let k: number = inputMatrix.length-1; i >= 0; i--)
        inputMatrix[i][j] = inputMatrix[k][i];
  }
}
return inputMatrix;
};

console.log(rotateMatrix(matrix));

