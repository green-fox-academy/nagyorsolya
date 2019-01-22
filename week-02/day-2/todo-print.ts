'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let mytodo: string = "My todo:\n";
let milk: string = '- Buy milk\n';
let games: string = "- Download games\n";
let diablo: string = "\t- Diablo\n";
let todoText = mytodo.concat(milk, games, diablo);

console.log(todoText);