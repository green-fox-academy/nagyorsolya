'use strict';

window.addEventListener('keyup', function (e){
  let h1Tag = document.getElementsByTagName("h1")[0];
h1Tag.innerText = e.code;
})