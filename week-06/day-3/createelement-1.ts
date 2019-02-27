'use strict';

//First task
let newElement = document.createElement("li");
let asteroidList = document.getElementsByClassName("asteroids")[0];
newElement.innerText = "The Green Fox";
asteroidList.appendChild(newElement);

//Second task
let newElement2 = document.createElement("li");
newElement2.innerText = "The Lamplighter";
asteroidList.appendChild(newElement2);