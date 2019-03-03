const express = require("express");
const app = express();
const PORT = 3000;
let images = ['views/first.jpg', 'views/second.jpg', 'views/third.jpg', 'views/fourth.jpg'];
let buttonleft = 'views/buttonleft.jpg';
let masnipics = ['views/masni.jpg', 'views/masni2.jpg', 'views/masni3.jpg', 'views/masni4.jpg']
let gallerypics = [{path: 'views/masni.jpg', name: "The first picture of Masni.",title: "This is one very lazy dog."}, 
                  {path: 'views/masni2.jpg', name: "The second picture of Masni.",title: "This is one very lazy dog."},
                  {path: 'views/masni3.jpg', name: "The third picture of Masni.",title: "This is one very lazy dog."},
                  {path: 'views/masni4.jpg', name: "The fourth picture of Masni.",title: "This is one very lazy dog."}
                  ];
let i = 0;

app.set("view engine", "ejs");
app.use("/views", express.static("views"));

app.get("/", (req, res) => {
  res.render('home', {image: images, button1: buttonleft, masni: masnipics, gallery: gallerypics, i: i})
 });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

