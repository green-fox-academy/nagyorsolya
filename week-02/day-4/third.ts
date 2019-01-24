'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function firstSquare (a: string) {
  let y = 195;
  let x = 10;
for (let i = 0; i <=29; i++) {
  ctx. beginPath();
  ctx. moveTo(x,200);
  ctx.strokeStyle = a;
  ctx.lineTo(300,y);
  ctx.stroke(); 
  y -= 10;
  x += 10;
}
  return a;
}
firstSquare("green");

function secondSquare (b: string) {
  let x = 590;
  let y = 195;
  for (let i = 0; i <= 29; i++) {
    ctx.beginPath();
    ctx.moveTo(x,200);
    ctx.strokeStyle = b;
    ctx.lineTo(300,y);
    ctx.stroke();
    x -= 10;
    y -= 10;
  }
  return b;
}

secondSquare("green");

function thirdSquare (c: string) {
  let x = 10;
  let y = 195;
for ( let i = 0; i <= 29; i++) {
  ctx.beginPath();
  ctx.moveTo(x, 200);
  ctx.strokeStyle = c;
  ctx.lineTo(300,y)
  ctx.stroke();
  x += 10;
  y += 10;
}
return c;
}

thirdSquare ("green");

function fourthSquare (d) {
  let x = 590;
  let y = 205;
  for (let i = 0; i<=29; i++) {
    ctx.beginPath();
    ctx.moveTo(x, 200);
    ctx.strokeStyle = d;
    ctx.lineTo(300,y)
    ctx.stroke();
    x -= 10;
    y += 10;
  }
  return d;
}

fourthSquare("green");