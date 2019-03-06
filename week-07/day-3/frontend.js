"use strict";

let data = "";
let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = console.log;
httpRequest.open(
  "GET",
  "http://api.giphy.com/v1/gifs/search?q=dog&api_key=Tw84cXRi1ZHSV8MNYsG7koGunhtBQWdJ&limit=16"
);

console.log(httpRequest.responseText);

httpRequest.onload = () => {
  data = JSON.parse(httpRequest.responseText);
  //console.log(data);
  for (let i = 0; i < 16; i++) {
    let img =  document.createElement("img");
     img.src = data.data[i].images.fixed_height_still.url;
     img.setAttribute("class","img");
     let body = document.querySelector(".container");
     body.appendChild(img);

     }
  for (let i = 0; i < 16; i++) {
     let images = document.querySelectorAll(".img");
     images[i].onclick = () => {       
       images[i].src = data.data[i].images.fixed_height.url;      
    }
  };
  };

httpRequest.send();