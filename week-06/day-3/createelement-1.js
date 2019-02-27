'use strict';
var newElement = document.createElement("li");
var asteroidList = document.getElementsByClassName("asteroids")[0];
newElement.innerText = "The Green Fox";
asteroidList.appendChild(newElement);
var newElement2 = document.createElement("li");
newElement2.innerText = "The Lamplighter";
asteroidList.appendChild(newElement2);
