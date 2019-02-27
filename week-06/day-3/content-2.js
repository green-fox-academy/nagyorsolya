'use strict';
//This is the first exercise
var replaceList = ['apple', 'banana', 'cat', 'dog'];
var liItems = document.getElementsByTagName("li");
for (var i = 0; i < liItems.length; i++) {
    liItems[i].innerText = replaceList[i];
}
;
for (var i = 0; i < liItems.length; i++) {
    console.log(liItems[i].innerText);
}
;
