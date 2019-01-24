'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function curvylines1(x) {
    let y = 50;
    for (let i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.moveTo(x, 10);
        ctx.strokeStyle = "purple";
        ctx.lineTo(580, y);
        ctx.stroke();
        x += 40;
        y += 30;
    };
    return x;
};

curvylines1(100);

function curvylines2(x) {
    let y = 350
    for (let i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.moveTo(x, 390);
        ctx.strokeStyle = "green";
        ctx.lineTo(20, y);
        ctx.stroke();
        y -= 30;
        x -= 40;
    };
    return x;
};

curvylines2(500);