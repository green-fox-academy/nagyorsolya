"use strict";

let data = "";
let postList = document.getElementById("posts");
let httpRequest = new XMLHttpRequest();
httpRequest.open("GET", "/posts");
httpRequest.setRequestHeader("Content-Type", "application/json");

httpRequest.onload = () => {
  data = JSON.parse(httpRequest.responseText);
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    let articleDiv = document.createElement("div");
    articleDiv.setAttribute("id", "article");
    postList.appendChild(articleDiv);
    let iconAndScore = document.createElement("div");
    iconAndScore.setAttribute("id", "iconandscore");
    articleDiv.appendChild(iconAndScore);

    let imageup = document.createElement("img");
    imageup.setAttribute("class", "upvote");
    imageup.setAttribute("src", "/assets/upvote.png");
    imageup.setAttribute("id", data[i].post_id);
    iconAndScore.appendChild(imageup);
    let score = document.createElement("p");
    score.innerText = data[i].score;
    score.setAttribute("id", data[i].post_id);
    iconAndScore.appendChild(score);
    let imagedown = document.createElement("img");
    imagedown.setAttribute("class", "downvote");
    imagedown.setAttribute("src", "/assets/downvote.png");
    imagedown.setAttribute("id", data[i].post_id);
    iconAndScore.appendChild(imagedown);

    let textElements = document.createElement("div");
    textElements.setAttribute("id", "textelements");
    articleDiv.appendChild(textElements);
    let postTitle = document.createElement("p");
    postTitle.innerText = data[i].title;
    textElements.appendChild(postTitle);
    let postModify = document.createElement("a");
    postModify.innerText = "Modify Remove";
    postModify.setAttribute("href", "#");
    textElements.appendChild(postModify);
  }
  let images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    let imageID = images[i].getAttribute("id");
    if (images[i].className === "upvote") {
      images[i].addEventListener("click", function() {
        let httpRequest2 = new XMLHttpRequest();
        httpRequest2.open("PUT", `/posts/${imageID}/upvote`);
        httpRequest2.send();
        httpRequest2.onload = () => {
          let response = JSON.parse(httpRequest2.responseText);
          console.log(response);
          let currentPost = document.querySelector(`p[id="${imageID}"]`);
          currentPost.innerText = response[0].score;
        };
      });
    }
    if (images[i].className === "downvote") {
      images[i].addEventListener("click", function() {
        let httpRequest2 = new XMLHttpRequest();
        httpRequest2.open("PUT", `/posts/${imageID}/downvote`);
        httpRequest2.send();
        httpRequest2.onload = () => {
          let response = JSON.parse(httpRequest2.responseText);
          console.log(response);
          let currentPost = document.querySelector(`p[id="${imageID}"]`);
          currentPost.innerText = response[0].score;
        };
      });
    }
  }
};

httpRequest.send();
