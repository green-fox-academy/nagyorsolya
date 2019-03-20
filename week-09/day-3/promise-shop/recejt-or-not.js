"use strict";
require("es6-promise");

var promise = new Promise(function(fulfill, reject) {
  // Your solution here
    fulfill("I FIRED");
    reject(new Error ('I DID NOT FIRE'));
});

function onRejected(error) {
  console.log(error.message);
}

promise.then(console.log, onRejected);

//Insted of console.log as function:
//promise.then((string)=>{console.log(string)}, onRejected);