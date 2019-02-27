'use strict';
//First task
var newElement = document.createElement("li");
var asteroidList = document.getElementsByClassName("asteroids")[0];
newElement.innerText = "The Green Fox";
asteroidList.appendChild(newElement);
//Second task
var newElement2 = document.createElement("li");
newElement2.innerText = "The Lamplighter";
asteroidList.appendChild(newElement2);
//Third task
var newHeading = document.createElement("h1");
var container = document.querySelector(".container");
newHeading.innerText = "I can add elements to the DOM!";
container.appendChild(newHeading);
//Fourth task
var newImage = document.createElement("img");
newImage.setAttribute("src", "https://consequenceofsound.files.wordpress.com/2018/09/screen-shot-2018-09-17-at-9-46-16-pm.png?w=471&h=521");
container.appendChild(newImage);
