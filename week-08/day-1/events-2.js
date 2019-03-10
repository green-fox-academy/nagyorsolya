'use strict';

function itemCounter (list) {
  let counter = 0;
  Array.from(list).forEach(element => {
  return counter++;
  });
 let result = document.getElementsByClassName("result")[0];
 result.innerText = counter;
}

let counterbutton = document.getElementById("counterbutton");
let liTags = document.getElementsByTagName("li");

counterbutton.addEventListener('click', function () {
  itemCounter(liTags);
});

