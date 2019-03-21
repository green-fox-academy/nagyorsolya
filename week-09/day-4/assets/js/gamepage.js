'use strict';

  let httprequest = new XMLHttpRequest();
  httprequest.open('GET', '/api/game');
  httprequest.onload = () => {
    let data = JSON.parse(httprequest.responseText);


    let questionTitle = document.getElementsByTagName("h3")[0];
    questionTitle.innerText = data.question;

    createElement("question1", 0, data);
    createElement( "question2", 1, data);
    createElement("question3", 2, data);
    createElement("question4", 3, data);
    
    
  }

  httprequest.send();

  function createElement (id, number, data) {
    let name = document.getElementById(id);
    name.innerText = data.answers[number].answer;
  }