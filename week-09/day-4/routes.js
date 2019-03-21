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
  res.sendFile(path.join(__dirname, "/assets/views/gamepage.html"));
});

app.get("/questions", (req, res) => {
  res.sendFile(path.join(__dirname, "/assets/views/manage-questions.html"));
});

app.get("/api/game", (req, res) => {
  
  //This will render a random question with its answers
});

app.get("/api/questions", (req, res) => {
  
  //This will render all the questions
});

app.post("/api/questions", (req, res) => {
  
  //This will add a new question and its answers to the database
});

app.delete("/api/questions/:id", (req, res) => {
  
  //This will delete a question from the database by entry
});

module.exports = app;