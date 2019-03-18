
const express = require("express");
const app = express();
app.use(express.json()); //middleware
const path = require("path");
//require("dotenv").config();
//let mysql = require("mysql");
app.use(express.urlencoded({ extended: true }));

app.use("/assets", express.static("assets"));

app.get("/yondu", (req, res) => {
  let distance = req.query.distance;
  let time = req.query.time;
  let speed = distance/time;
if (!time || !distance) {
  res.status(404);
  res.json({error: "Please provide input parameters!"});
}
else {
  res.json({"distance": distance, "time": time, "speed": speed});
}
});

module.exports = app;