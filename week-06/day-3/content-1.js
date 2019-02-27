'use strict';
//This is the first exercise
var pTagstext = document.getElementsByTagName("p");
for (var i = 0; i < pTagstext.length; i++) {
    pTagstext[i].innerText = pTagstext[pTagstext.length - 1].innerText;
}
for (var i = 0; i < pTagstext.length; i++) {
    console.log(pTagstext[i]);
}
;
//This is the second exercise
var pTags = document.getElementsByTagName("p");
for (var i = 0; i < pTags.length - 1; i++) {
    pTags[i].innerHTML = pTags[pTags.length - 1].innerHTML;
}
for (var i = 0; i < pTags.length; i++) {
    console.log(pTags[i]);
}
;
