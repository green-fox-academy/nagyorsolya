'use strict';
//This is the first exercise
var king = document.getElementById("b325");
console.log(king);
//This is the second exercise
var businessLamp = [];
var asteroid = document.getElementsByClassName("asteroid");
console.log(asteroid);
for (var i = 0; i < asteroid.length; i++) {
    if (asteroid[i].innerText === "The Businessman" || asteroid[i].innerText === "The Lamplighter") {
        businessLamp.push(asteroid[i]);
    }
}
businessLamp.forEach(function (element) {
    console.log(element);
});
//This is the third exercise 
var conceitedKing = document.getElementsByClassName("container");
for (var i = 0; i < conceitedKing[0].children.length; i++) {
    console.log(conceitedKing[0].children[i].innerText);
}
;
//This is the forth exercise
var noBusiness = [];
var containerElements = document.getElementsByClassName("container");
for (var i = 0; i < containerElements[0].children.length; i++) {
    noBusiness.push((containerElements[0].children[i].innerText));
}
;
var asteroids = document.getElementsByClassName("b329")[0];
noBusiness.push(asteroids.innerText);
noBusiness.forEach(function (element) {
    console.log(element);
});
