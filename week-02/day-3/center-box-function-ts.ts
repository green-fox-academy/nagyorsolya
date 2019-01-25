'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

let colors = ["magenta", "yellow", "blue", "grey"];

function multisquares(a) {
  let z = 0;
  let x = 300 - a / 2;
  let y = 200 - a / 2;
  for (let i = 0; i < 3; i++) {
    ctx.fillStyle = colors[z];
    ctx.fillRect(x, y, a, a);
    z = z + 1;
    a = a / 2;
    x = 300 - a / 2;
    y = 200 - a / 2;
  };
  return a;
};

console.log(multisquares(150));