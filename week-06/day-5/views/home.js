'use strict';

let gallerypics1 = [{path: 'views/masni.jpg', name: "The first picture of Masni.",title: "This is one very lazy dog."}, 
{path: 'views/masni2.jpg', name: "The second picture of Masni.",title: "This is one very lazy dog."},
{path: 'views/masni3.jpg', name: "The third picture of Masni.",title: "This is one very lazy dog."},
{path: 'views/masni4.jpg', name: "The fourth picture of Masni.",title: "This is one very lazy dog."}
];


let i = 0;

function changeImageAndTitles (picNumber) {
  i = picNumber;
  document.getElementById("masnik").setAttribute("src", gallerypics1[i].path)
  document.getElementsByClassName("galleryname")[0].innerHTML = gallerypics1[i].name;
  document.getElementsByClassName("gallerytitle")[0].innerHTML = gallerypics1[i].title;
}

function changeImageRight () {
  i++;  
  if (i=== gallerypics1.length) {
    i = 0;
  }
changeImageAndTitles(i);
  };

  function changeImageLeft () {
    i--;  
    if (i < 0) {
      i = gallerypics1.length-1;
    }
    changeImageAndTitles(i);
    };