"use strict";

const express = require("express");
const app = express();
app.use(express.json()); //middleware
const path = require("path");
require("dotenv").config();
let mysql = require("mysql");
app.use(express.urlencoded({ extended: true }));


const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

app.use("/assets", express.static("assets"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/frontpage.html"));
});

app.get("/drax", (req, res) => {
conn.query('SELECT * FROM food;', (err, rows) => {
  res.json(rows);
});
});  

app.post("/add", (req, res) => {
  let foodName = req.body.name;
  let foodAmount = req.body.amount;
  let foodCalorie = req.body.calorie;
  conn.query(`INSERT INTO food (name, amount, calories) VALUES ('${foodName}', ${foodAmount}, ${foodCalorie});`, (err, rows) => {
    res.json(rows);
  });
});

app.delete("/delete", (req, res) => {
  let id = req.body.id;
  conn.query(`DELETE FROM food WHERE id=${id};`, (err, rows) => {
  });
  });  

module.exports = app;