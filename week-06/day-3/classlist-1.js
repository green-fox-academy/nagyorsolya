'use strict';
//First task
var peeTags = document.querySelectorAll("p");
if (peeTags[3].classList.contains("dolphin")) {
    peeTags[0].innerText = "pear";
}
;
//Second task
if (peeTags[0].classList.contains("apple")) {
    peeTags[2].innerText = "dog";
}
;
//Third task
peeTags[0].setAttribute("class", "red");
//Fourth task
peeTags[1].setAttribute("style", "border-radius: 0%;");
