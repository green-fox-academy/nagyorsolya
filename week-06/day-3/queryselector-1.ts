'use strict';
/*
//This is the first exercise
let king: any = document.getElementById("b325");
console.log(king);

//This is the second exercise
let businessLamp: any[] = [];

let asteroid: any = document.getElementsByClassName("asteroid");
console.log(asteroid);

for (let i: number = 0; i < asteroid.length; i++) {
  if (asteroid[i].innerText === "The Businessman" || asteroid[i].innerText === "The Lamplighter") {
    businessLamp.push(asteroid[i]);
  }
}

businessLamp.forEach(element => {
  console.log(element);
});

//This is the third exercise 

let conceitedKing: any = document.getElementsByClassName("container");

for (let i: number = 0; i < conceitedKing[0].children.length; i++) {
 console.log(conceitedKing[0].children[i].innerText);
}; */

//This is the forth exercise

let noBusiness: any [] = [];

let containerElements: any = document.getElementsByClassName("container");

for (let i: number = 0; i < containerElements[0].children.length; i++) {
  noBusiness.push((containerElements[0].children[i].innerText));
 };

 let asteroids: any = document.getElementsByClassName("b329")[0];

 noBusiness.push(asteroids.innerText);

 noBusiness.forEach(element => {
   console.log(element);
 });
