const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use("/views", express.static("views"));

app.get("/", (req, res) => {
  res.render('home')
 });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});