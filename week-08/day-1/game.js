'use strict';

let candyCreatorButton = document.getElementsByClassName("create-candies")[0];
let candyCounter = 0;

candyCreatorButton.addEventListener('click', function () {
  candyCounter++;
  let numberOfCandies = document.getElementsByClassName("candies")[0];
  numberOfCandies.textContent = candyCounter;
})

let lollypopBuyerButton = document.getElementsByClassName("buy-lollypops")[0];

lollypopBuyerButton.addEventListener('click', function (){
  if (candyCounter >= 100) {
  candyCounter -= 100;
  numberOfCandies.textContent = candyCounter;
  let lollypops = document.getElementsByClassName("lollypops")[0];
  lollypops.textContent += '🍭';
  }
  else if (candyCounter < 100) {
  window.alert(`${100-candyCounter} more candies needed to buy a lollypop!`);
  }
});

let lollypops = document.getElementsByClassName("lollypops")[0];
if ((lollypops.textContent.length/2) % 10 === 0) {
  let numberOfLollypops = (lollypops.textContent.length/2) / 10;
  let candySpeed = document.getElementsByClassName("speed")[0];
  candySpeed.textContent = numberOfLollypops;
};

let candyGenerator;
let candyspeed = 1000;
candyGenerator = setInterval(myFunction, candyspeed);

function myFunction () {
let numberOfCandies = document.getElementsByClassName("candies")[0];
let numberOfLollypops = (lollypops.textContent.length/2) / 10;
let numberOfCandiesCounter = parseInt(numberOfCandies.textContent);
if ((lollypops.textContent.length/2) % 10 === 0) {
numberOfCandiesCounter += numberOfLollypops;
numberOfCandies.textContent = numberOfCandiesCounter;
console.log()
}};

let makeCandyRain = document.getElementsByClassName("candy-machine")[0];
makeCandyRain.addEventListener('click', function (e){
  e.preventDefault();
  clearInterval(candyGenerator);
  candyspeed *= 10;
  candyGenerator = setInterval(myFunction, 10000);
});


