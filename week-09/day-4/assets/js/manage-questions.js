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
  let submitButton = document.querySelector("input[id='submitButton']");
  submitButton.addEventListener('click', function (e){
    let myForm = document.querySelector('form[id="addNewQuestion"]');
    console.log(myForm);
    e.preventDefault();
    let addNewQuestion = new XMLHttpRequest();
    addNewQuestion.open('POST', '/api/questions');
    addNewQuestion.setRequestHeader("Content-type", "application/json");
    let dataToSend = {};
  
    dataToSend.question = myForm.elements.eh.value;
    dataToSend.answer1 = myForm.elements.one.value;
    dataToSend.answer2 = myForm.elements.two.value;
    dataToSend.answer3 = myForm.elements.three.value;
    dataToSend.answer4 = myForm.elements.four.value;

if (document.querySelector("input[id='1']").checked) {
  dataToSend.iscorrect1 = 1;
}
else {
  dataToSend.iscorrect1 = 0;
};
if (document.querySelector("input[id='2']").checked) {
  dataToSend.iscorrect2 = 1;
}
else {
  dataToSend.iscorrect2 = 0;
};
if (document.querySelector("input[id='3']").checked) {
  dataToSend.iscorrect3 = 1;
}
else {
  dataToSend.iscorrect3 = 0;
};
if (document.querySelector("input[id='4']").checked) {
  dataToSend.iscorrect4 = 1;
}
else {
  dataToSend.iscorrect4 = 0;
};
console.log(dataToSend);
    addNewQuestion.send(JSON.stringify(dataToSend));
  })

};

listQuestions.send();

function createDivs(i, data) {
  let body = document.getElementsByTagName("body")[0];
  let newDiv = document.createElement("div");
  newDiv.setAttribute("id", data[i].id);
  newDiv.innerText = data[i].question;
  newDiv.setAttribute('class', 'something');
  body.appendChild(newDiv);
  let newButton = document.createElement("button");
  newDiv.appendChild(newButton);
  newButton.innerText = "Delete";
  newButton.setAttribute("id", data[i].id);
}
