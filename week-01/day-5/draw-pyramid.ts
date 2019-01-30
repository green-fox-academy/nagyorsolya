'use strict';

const n = 7;

for (let i = 0; i < n; i++) {
  let line = "";
    for (let j = 0; j < (n-i-1); j++) {
      line += " ";
    }
    for (let k =0; k < i*2+1; k++) {
      line += "*";
    }
    console.log(line);
};
