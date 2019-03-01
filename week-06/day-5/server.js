const express = require("express");
const app = express();
const PORT = 3000;
let images = ['views/first.jpg', 'views/second.jpg', 'views/third.jpg', 'views/fourth.jpg'];
let buttonleft = 'views/buttonleft.jpg';

app.set("view engine", "ejs");
app.use("/views", express.static("views"));

app.get("/", (req, res) => {
  res.render('home', {image: images, button1: buttonleft})
 });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});