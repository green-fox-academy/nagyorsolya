'use strict';


function createDivs () {
for (let i = 1; i <= 100; i++) {
  let divTag = document.createElement("div");
  divTag.innerText = i;
  let sectionTag = document.getElementsByTagName("section")[0];
  sectionTag.appendChild(divTag);
};
};

createDivs();

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
  for(var i = 2; i < value; i++) {
      if(value % i === 0) {
          return false;
      }
  }
  return value > 1;
};
