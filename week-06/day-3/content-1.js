'use strict';
var pTags = document.getElementsByTagName("p");
for (var i = 0; i < pTags.length - 1; i++) {
    pTags[i].innerHTML = pTags[pTags.length - 1].innerHTML;
}
for (var i = 0; i < pTags.length; i++) {
    console.log(pTags[i]);
}
