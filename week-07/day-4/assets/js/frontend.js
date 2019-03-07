"use strict";

let data = "";
let httpRequest = new XMLHttpRequest();
httpRequest.open(
  "GET",
  "/booknames"
);

console.log(httpRequest.responseText);

httpRequest.onload = () => {
  data = JSON.parse(httpRequest.responseText);
  console.log(data);
    for (let i = 0; i < data.length; i++ ) {
      let body = document.getElementsByClassName("list")[0];
      let pTag = document.createElement("li")
      pTag.innerText = data[i].book_name;
      body.appendChild(pTag);
    }
  };

httpRequest.send();