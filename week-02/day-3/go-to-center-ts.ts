'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

function drawLines (x: number,y: number) {
   for (let y = 0; y <= 400; y = y+200) {
   console.log (x,y);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(300,200);
    ctx.strokeStyle = 'magenta';
    ctx.stroke();
   };
   return y;
};

console.log(drawLines(600,0));