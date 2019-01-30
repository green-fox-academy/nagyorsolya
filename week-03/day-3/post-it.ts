/*
Create a PostIt a class that has
a backgroundColor
a text on it
a textColor
Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!"*/


class PostIt {
  backgroundcolor;
  text;
  textColor;

  constructor (color, textOf, textCol) {
    this.backgroundcolor = color
    this.text = textOf
    this.textColor = textCol
  }
}

let postIt1 = new PostIt ("orange", "Idea 1", "blue");
let postIt2 = new PostIt ("pink", "Awsome", "black");
let postIt3 = new PostIt ("yellow", "Superb!", "green");

console.log(postIt1, postIt2, postIt3);