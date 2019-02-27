'use strict';

//This is the first exercise

let pTagstext = document.getElementsByTagName("p");

for (let i: number = 0; i < pTagstext.length; i++) {
  pTagstext[i].innerText = pTagstext[pTagstext.length-1].innerText;
}

for (let i: number = 0; i < pTagstext.length; i++) {
  console.log(pTagstext[i]);
}; 

//This is the second exercise
let pTags = document.getElementsByTagName("p");

for (let i: number = 0; i < pTags.length-1; i++) {
  pTags[i].innerHTML = pTags[pTags.length-1].innerHTML;
}

for (let i: number = 0; i < pTags.length; i++) {
  console.log(pTags[i]);
};