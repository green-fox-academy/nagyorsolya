'use strict';
var planetData = [
    {
        category: 'inhabited',
        content: 'Foxes',
        asteroid: true
    },
    {
        category: 'inhabited',
        content: 'Whales and Rabbits',
        asteroid: true
    },
    {
        category: 'uninhabited',
        content: 'Baobabs and Roses',
        asteroid: true
    },
    {
        category: 'inhabited',
        content: 'Giant monsters',
        asteroid: false
    },
    {
        category: 'inhabited',
        content: 'Sheep',
        asteroid: true
    },
];
//First task
var asteroidsUl = document.querySelector(".asteroids");
var kingElement = document.getElementsByTagName("li")[0];
kingElement.setAttribute("class", "king");
asteroidsUl.removeChild(kingElement);
//Second task
var asteroidElements = document.getElementsByTagName("li");
for (var i = 0; i < planetData.length; i++) {
    asteroidsUl.appendChild(document.createElement("li"));
}
asteroidElements;
