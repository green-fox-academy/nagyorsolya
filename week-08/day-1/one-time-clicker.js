'use strict';

//First solution with add and remove event listener

let button = document.getElementsByTagName("button")[0];

function getDate () {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  let yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;
  console.log(today);
  button.removeEventListener('click', getDate);
};

button.addEventListener('click', getDate); 

/* //Second solution with classes

button.addEventListener('click', function () {
  if (button.className == "clickable") {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();
  
    today = mm + '/' + dd + '/' + yyyy;
    console.log(today);
    button.className = "";
  };
}); */