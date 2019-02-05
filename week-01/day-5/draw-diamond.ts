'use strict';

const height = 9;
const z = Math.floor(height / 2);
const n = height - z;

for (let i = 0; i < n; i++) {
  let line = "";
  for (let j = 0; j < (n - i - 1); j++) {
    line += " ";
  }
  for (let k = 0; k < i * 2 + 1; k++) {
    line += "*";
  }
  console.log(line);
};

for (let l = 0; l < z; l++) {
  let line2 = "";
  if (height % 2 === 0) {
    for (let o = 0; o < (l * 1); o++) {
      line2 += " ";
    }
  }
  else {
    for (let o = 0; o < (l * 1) + 1; o++) { //Code alternative: o < (l*1)+a because let a = height % 2
      line2 += " ";
    }
  }
  for (let m = 0; m < (z * 2) - l * 2 - 1; m++) {
    line2 += "*";
  }
  console.log(line2);
};