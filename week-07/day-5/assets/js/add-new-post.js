"use strict";

var form = document.getElementById("myForm");

window.addEventListener("load", function() {
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    let request = new XMLHttpRequest();
    request.open("POST", "/posts");
    request.setRequestHeader('Content-type', 'application/json');
    request.setRequestHeader("userid", 101);
    var object = {
      title: document.querySelector("input[name='title']").value,
      url: document.querySelector("input[name='url']").value
    };

    request.send(JSON.stringify(object));
    request.onload = () => {
      window.location.replace("http://localhost:3000");
    };
  });
});
