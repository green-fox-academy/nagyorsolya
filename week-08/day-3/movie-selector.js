"use strict";

let scifiInput = document.querySelector('option[value = "sci-fi"]');
let dramaInput = document.querySelector('option[value = "drama"]');
let comedyInput = document.querySelector('option[value = "comedy"]');
let movieList = document.getElementsByTagName("li");
let movieDropDown = document.getElementById("movie-select");
let movieResults = document.getElementsByClassName("movieresults")[0];
let genreResults = document.getElementById("genreresults");
let genreDropDown = document.getElementById("genre-select");

genreDropDown.addEventListener("change", function() {
  if (scifiInput.selected === true) {
    let genre = scifiInput.innerText.toLowerCase();
    createDropDownList(genre);
  }
  if (dramaInput.selected === true) {
    let genre = dramaInput.innerText.toLowerCase();
    createDropDownList(genre);
  }
  if (comedyInput.selected === true) {
    let genre = comedyInput.innerText.toLowerCase();
    createDropDownList(genre);
  }
});

function createDropDownList(genre) {
  movieDropDown.innerHTML = "";
  for (let i = 0; i < movieList.length; i++) {
    if (movieList[i].className === genre) {
      let newOption = document.createElement("option");
      newOption.innerText = movieList[i].innerText;
      newOption.setAttribute("value", movieList[i].innerText);
      movieDropDown.appendChild(newOption);
    }
  }
}

movieDropDown.addEventListener('change', function () {
  let pTag = document.createElement("p");
  movieResults.innerHTML = "";
  for (let i = 0; i < movieDropDown.options.length; i++) {
    if (movieDropDown.options[i].selected === true) {
      pTag.innerText = `The selected movie is: ${movieDropDown.options[i].value}`;
    }
  }
  movieResults.appendChild(pTag);
})
