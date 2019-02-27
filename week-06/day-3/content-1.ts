'use strict';

//This is the first exercise

let pTags = document.getElementsByTagName("p");

for (let i: number = 0; i < pTags.length-1; i++) {
  pTags[i].innerHTML = pTags[pTags.length-1].innerHTML;
}

for (let i: number = 0; i < pTags.length; i++) {
  console.log(pTags[i]);
};