'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

var oneday = (24*60*60); //This shows how many seconds are in a day
var currentseconds = (currentHours*60*60)+(currentMinutes*60)+currentSeconds; //This shows how many seconds have already passed in the day

console.log("There are " + (oneday-currentseconds) + " seconds remaining from the day.");