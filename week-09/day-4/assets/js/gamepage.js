"use strict";

let httprequest = new XMLHttpRequest();
httprequest.open("GET", "/api/game");
httprequest.onload = () => {
  let score = 0;
  let data = JSON.parse(httprequest.responseText);

  let questionTitle = document.getElementsByTagName("h3")[0];
  questionTitle.innerText = data.question;
  createElement("answer1", 0, data);
  createElement("answer2", 1, data);
  createElement("answer3", 2, data);
  createElement("answer4", 3, data);
  let goToManageQuestions = document.createElement("a");
  let body = document.getElementsByTagName('body')[0];
  body.appendChild(goToManageQuestions);
  goToManageQuestions.innerText = "Manage questions";
  goToManageQuestions.setAttribute('href', '#');
  goToManageQuestions.addEventListener('click', function () {
    window.location.replace('http://localhost:8080/questions');
  })

  let divTags = document.querySelectorAll("div");
  let numberOfclicks = 0;
  divTags.forEach(element => {
    element.addEventListener("click", function() {
      numberOfclicks++;
      if (numberOfclicks <= 1) {
        if (element.getAttribute("iscorrect") === "0") {
          element.style.backgroundColor = "red";
          setTimeout(() => {
            let goodAnswer = document.querySelector("div[iscorrect='1']");
            goodAnswer.style.backgroundColor = "green";
          }, 1000);
        } else {
          element.style.backgroundColor = "green";
          score++;
          let scoreTracker = document.getElementById("score");
          scoreTracker.innerText = `Score: ${score}`;
        }
        setTimeout(() => {
          let loadNewGame = new XMLHttpRequest();
          loadNewGame.open("GET", "/api/game");
          loadNewGame.onload = () => {
            let data = JSON.parse(loadNewGame.responseText);

            let questionTitle = document.getElementsByTagName("h3")[0];
            questionTitle.innerText = data.question;
            createElement("answer1", 0, data);
            createElement("answer2", 1, data);
            createElement("answer3", 2, data);
            createElement("answer4", 3, data);
            numberOfclicks = 0;
          };
          loadNewGame.send();
        }, 3000);
      }
    });
  });
};

httprequest.send();

function createElement(id, number, data) {
  let name = document.getElementById(id);
  name.innerText = data.answers[number].answer;
  name.style.backgroundColor = "blue";
  if (data.answers[number].is_correct === 0) {
    name.setAttribute("iscorrect", 0);
  } else {
    name.setAttribute("iscorrect", 1);
  }
}
