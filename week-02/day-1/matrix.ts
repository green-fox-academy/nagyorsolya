//First solution
let matrix: number [][] = [];
let size: number = 4;
for (let i = 0; i < size; i++) {
    matrix[i] = [];
    for (let j = 0; j < size; j++) {
     if (i+j === size-1) {
      matrix[i][j] = 1; 
     }
     else {
       matrix[i][j] = 0;
     }
    }
    console.log(matrix[i]);
} 

//Second solution

let matrix2: number [][] = [];
let matrixSize = 4;

for (let i = 0; i < matrixSize; i++) {
  matrix2.push([]);
  for (let j = 0; j < matrixSize; j++) {
      if (j === matrixSize-i-1) {
        matrix2[i].push(1);
      }
      else {
        matrix2[i].push(0);
      }
}
console.log(matrix2[i]);
}