'use strict';
const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];
//First task
let asteroidsUl = document.querySelector(".asteroids");
let kingElement = document.getElementsByTagName("li")[0];
kingElement.setAttribute("class", "king");
asteroidsUl.removeChild(kingElement);

//Second task
let asteroidElements = document.getElementsByTagName("li");
for (let i: number = 0; i < planetData.length; i++) {
  asteroidsUl.appendChild(document.createElement("li"));
}

asteroidElements