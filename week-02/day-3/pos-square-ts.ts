'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function squaredrawing (x, y) {
    for (let y = 50; y < 200 ; y = y+60) {
             ctx.beginPath();
             ctx.fillStyle = "pink";
             ctx.fillRect(x,y, 50,50);
            };
            return y;
        };
        
        console.log(squaredrawing(100,0));