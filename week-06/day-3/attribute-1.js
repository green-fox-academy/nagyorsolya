'use strict';
//This is the first exercise
var img = document.querySelector("img");
console.log(img.getAttribute("src"));
//This is the second exercise
img.setAttribute("src", "https://i.ndtvimg.com/i/2017-02/australian-quokko-650_650x400_71488173163.jpg?output-quality=70&output-format=webp");
//This is the third exercise
var aTag = document.querySelector("a");
aTag.setAttribute("href", "http://greenfoxacademy.com");
//This is the forth exercise
var buttonDisable = document.querySelector(".this-one").setAttribute("disabled", "true");
//This is the fifth exercise
var button2 = document.querySelector(".this-one");
button2.textContent = "Don't click me!";
