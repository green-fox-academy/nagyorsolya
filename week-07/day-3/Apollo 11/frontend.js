"use strict";

let data = "";
let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = console.log;
httpRequest.open(
  "GET",
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo+11&api-key=JCQOCCcXjrfevUnzP4M2WUCEASJQIoGA"
);

httpRequest.onload = () => {
  data = JSON.parse(httpRequest.responseText);

  for (let i = 0; i < data.response.docs.length; i++) {
    let link = document.createElement("p");
    let heading = document.createElement("h1");
    let snippet = document.createElement("h4");
    let pubDate = document.createElement("p");  
    let click = document.createElement("a");

    heading.innerText = data.response.docs[i].headline.main;
    snippet.innerText = data.response.docs[i].pub_date;
    pubDate.innerText = data.response.docs[i].snippet;
    click.setAttribute("href", data.response.docs[i].web_url);
    link.innerText = "To read the original article click here: ";
    click.innerText =  data.response.docs[i].web_url;
  
    document.getElementById("body").appendChild(heading);
    document.getElementById("body").appendChild(snippet);
    document.getElementById("body").appendChild(pubDate);
    document.getElementById("body").appendChild(link);
    document.getElementById("body").appendChild(click);

  }
};

httpRequest.send();
