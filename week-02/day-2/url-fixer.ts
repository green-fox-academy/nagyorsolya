'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

//This is the first function solution

function fixurl (a: string) {
 let array1: string [] = a.split("");
    array1.splice(5,0,":");
    array1.splice(-4,4,"odds");
let output: string = array1.join("")
    return output;
}


console.log(fixurl(url));

//This is the second function solution
function fixurl2 (a: string) {
  url = url.replace("https","https:");
  url  = url.replace ("bots", "odds");
   return url;
}
console.log(fixurl2(url));