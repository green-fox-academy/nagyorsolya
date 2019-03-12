"use strict";

function createNewHttpRequest(inputFieldValue) {
  let data = "";
  let httpRequest = new XMLHttpRequest();
  httpRequest.open("GET", "https://swapi.co/api/people/");

  httpRequest.onload = () => {
    data = JSON.parse(httpRequest.responseText);
    let simpleText = document.getElementById("title");
    if (!simpleText) {
      simpleText = document.createElement("h4");
      simpleText.setAttribute("id", "title");
    }
    simpleText.innerText =
      "Click on each character name to see the movies they played in:";
    let formTag = document.getElementsByTagName("form")[0];
    formTag.appendChild(simpleText);
    for (let i = 0; i < data.results.length; i++) {
      let currentName = data.results[i].name.toLowerCase();
      if (currentName.includes(inputFieldValue)) {
        let searchResults = document.getElementById("searchresult");
        let aTag = document.createElement("a");
        aTag.innerHTML = data.results[i].name + "<br>";
        aTag.setAttribute("href", "#");
        searchResults.appendChild(aTag);
        aTag.addEventListener("click", function() {
          for (let i = 0; i < data.results[i].films.length; i++) {
            let movieResults = document.getElementById("movies");
            movieResults.innerHTML = "";
            let httpRequest2 = new XMLHttpRequest();
            httpRequest2.open("GET", data.results[i].films[i]);
            httpRequest2.onload = () => {
              let newdata = JSON.parse(httpRequest2.responseText);
              let movieElement = document.createElement("p");
              movieElement.innerText = newdata.title;
              movieResults.appendChild(movieElement);
            };
            httpRequest2.send();
          }
        });
      }
    }
  };
  httpRequest.send();
}

let submitButton = document.getElementById("submitbutton");
let inputField = document.getElementById("textbox");

submitButton.addEventListener("click", function(e) {
  e.preventDefault();
  let searchResults = document.getElementById("searchresult");
  searchResults.innerHTML = "";
  let movieResults = document.getElementById("movies");
  movieResults.innerHTML = "";
  let inputFieldValue = inputField.value;
  createNewHttpRequest(inputFieldValue);
});
