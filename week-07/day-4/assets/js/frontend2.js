"use strict";

let data = "";
let httpRequest = new XMLHttpRequest();
httpRequest.open(
  "GET",
  "/booklist"
);

console.log(httpRequest.responseText);

httpRequest.onload = () => {
  data = JSON.parse(httpRequest.responseText);
  for (let i = 0; i < data.length; i++ ) {
    let table = document.getElementsByTagName("table")[0];
    let line = document.createElement("tr");
    let dataElement = document.createElement("td");
    dataElement.innerText = data[i].book_name;
    let dataElement2 = document.createElement("td");
    dataElement2.innerText = data[i].aut_name;
    let dataElement3 = document.createElement("td");
    dataElement3.innerText = data[i].pub_name;
    let dataElement4 = document.createElement("td");
    dataElement4.innerText = data[i].cate_descrip;
    let dataElement5 = document.createElement("td");
    dataElement5.innerText = data[i].book_price + "$";
    line.appendChild(dataElement);
    line.appendChild(dataElement2);
    line.appendChild(dataElement3);
    line.appendChild(dataElement4);
    line.appendChild(dataElement5);
    table.appendChild(line);


  };
  };

httpRequest.send();