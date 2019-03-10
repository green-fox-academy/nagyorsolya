'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

//First solution 

/*function displayFruits () {
  console.log('apple');
  setTimeout(() => {
    console.log('pear')
  }, 1000);
  setTimeout(() => {
    console.log('melon');
  }, 3000);
  setTimeout(() => {
    console.log('grapes');
  }, 5000);
}; */

//Second solution without code duplication

let fruits = ['apple', 'pear', 'melon', 'grapes'];

function fruitDisplayer(list) {
  let seconds = 1000;
  for (let i = 0; i < list.length; i++) {
  setTimeout(() => {
    console.log(list[i]);
  }, seconds);
  seconds += 2000;
}};

fruitDisplayer(fruits);