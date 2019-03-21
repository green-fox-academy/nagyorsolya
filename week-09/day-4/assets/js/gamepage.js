"use strict";

let httprequest = new XMLHttpRequest();
httprequest.open("GET", "/api/game");
httprequest.onload = () => {
  let data = JSON.parse(httprequest.responseText);

  let questionTitle = document.getElementsByTagName("h3")[0];
  questionTitle.innerText = data.question;
  createElement("answer1", 0, data);
  createElement("answer2", 1, data);
  createElement("answer3", 2, data);
  createElement("answer4", 3, data);

  let divTags = document.querySelectorAll("div");
  console.log(divTags);
  divTags.forEach(element => {
    console.log(element);
    element.addEventListener("click", function() {
      console.log(element.getAttribute("iscorrect"));
      if (element.getAttribute("iscorrect") === "0") {
        element.style.backgroundColor = "red";
      } else {
        element.style.backgroundColor = "green";
      }
    });
  });
};

httprequest.send();

function createElement(id, number, data) {
  let name = document.getElementById(id);
  name.innerText = data.answers[number].answer;
  if (data.answers[number].is_correct === 0) {
    name.setAttribute("iscorrect", 0);
  } else {
    name.setAttribute("iscorrect", 1);
  }
}
