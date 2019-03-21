"use strict";

let listQuestions = new XMLHttpRequest();
listQuestions.open("GET", "/api/questions");

listQuestions.onload = () => {
  let data = JSON.parse(listQuestions.responseText);
  for (let i = 0; i < data.length; i++) {
    createDivs(i, data);
  }
};

listQuestions.send();

function createDivs(i, data) {
  let body = document.getElementsByTagName("body")[0];
  let newDiv = document.createElement("div");
  newDiv.setAttribute("id", data[i].id);
  newDiv.innerText = data[i].question;
  body.appendChild(newDiv);
  let newButton = document.createElement("button");
  newDiv.appendChild(newButton);
  newButton.innerText = "Delete";
}
