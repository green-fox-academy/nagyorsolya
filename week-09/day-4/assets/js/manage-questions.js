"use strict";

let listQuestions = new XMLHttpRequest();
listQuestions.open("GET", "/api/questions");

listQuestions.onload = () => {
  let data = JSON.parse(listQuestions.responseText);
  for (let i = 0; i < data.length; i++) {
    createDivs(i, data);
  }

  let buttons = document.querySelectorAll("button");

  buttons.forEach(element => {
    element.addEventListener('click', function (){
      let buttonID = element.getAttribute('id');
      let currentDiv = document.querySelector(`div[id='${buttonID}']`);
      console.log(currentDiv);
      currentDiv.outerHTML = "";
      let deleteQuestion = new XMLHttpRequest();
      deleteQuestion.open('DELETE', `/api/questions/${buttonID}`);
      deleteQuestion.send();

    })
  })


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
  newButton.setAttribute("id", data[i].id);
}
