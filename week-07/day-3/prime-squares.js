'use strict';

let primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function createDivs () {
for (let i = 1; i <= 100; i++) {
  let divTag = document.createElement("div");
  divTag.innerText = i;
  let sectionTag = document.getElementsByTagName("section")[0];
  sectionTag.appendChild(divTag);
};
};

createDivs();

let myTimeout;

function colorize () {
let divTags = document.querySelectorAll("div");
for (let i = 0; i < divTags.length; i++) {
setTimeout(() => {
  if (isPrime(i+1) === true) {
    divTags[i].className = "prime";
  }
  else {
    divTags[i].className = "not-prime";
  }
}, 50*i)};
};

colorize();

function isPrime(value) {
  for(var j = 2; j < value; j++) {
      if(value % j === 0) {
          return false;
      }
  }
  return value > 1;
};
