'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

let colors = ["pink", "yellow", "blue", "green", "black", "red"]

function drawsquares (x,y) {
let z = 50;
let zs = 20;
let i = 0;
    for (let y = 50; y < 250 ; y = y+60) {
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.fillStyle = colors[i];
    ctx.fillRect (x,y, z = z+10, zs = zs+10);
    i +=1;
    };
    return y;
};

console.log(drawsquares(100,0));