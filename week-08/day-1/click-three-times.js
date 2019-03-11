"use strict";

let button = document.getElementsByTagName("button")[0];
let body = document.getElementsByTagName("body")[0];
let clickCounter = 0;

setTimeout(() => {
  button.addEventListener("click", buttonClicker);
}, 5000);

function buttonClicker() {
  clickCounter++;
  if (clickCounter === 3) {
    let pTag = document.createElement("p");
    pTag.innerText = "5 seconds elapsed and clicked 3 times";
    body.appendChild(pTag);
    button.removeEventListener("click", buttonClicker);
  };
};
