'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.

//First line
ctx.beginPath();
ctx.moveTo(150,150);
ctx.strokeStyle = 'yellow';
ctx.lineTo(450, 150);
ctx.stroke();

//Second line
ctx.beginPath();
ctx.moveTo(450,150);
ctx.strokeStyle = 'magenta'
ctx.lineTo(450,250);
ctx.stroke();

//Third line
ctx.beginPath();
ctx.moveTo(450,250);
ctx.strokeStyle = "blue"
ctx.lineTo(150,250);
ctx.stroke();

//Fourth line
ctx.beginPath();
ctx.moveTo(150,250);
ctx.strokeStyle = "green"
ctx.lineTo(150,150);
ctx.stroke();
