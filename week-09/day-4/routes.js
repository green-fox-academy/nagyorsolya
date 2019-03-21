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

//Just for testing how the database looks like
app.get("/listall", (req, res) => {
  conn.query(
    "SELECT * from questions LEFT JOIN answers ON questions.id = answers.question_id;",
    (err, rows) => {
      res.json(rows);
    }
  );
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/assets/views/gamepage.html"));
});

app.get("/questions", (req, res) => {
  res.sendFile(path.join(__dirname, "/assets/views/manage-questions.html"));
});

app.get("/api/game", (req, res) => {

  conn.query('SELECT id FROM questions;', (err, ids) => {
    let idArray = [];
    Array.from(ids).forEach(element => {
      idArray.push(element.id);
    })
  
let randomQuestionNumber = Math.floor(Math.random() * idArray.length) + 0;
  conn.query(
    `SELECT * from questions LEFT JOIN answers ON questions.id = answers.question_id WHERE questions.id = ${idArray[randomQuestionNumber]};`,
    (err, rows) => {
      conn.query(
        `SELECT answers.id, question_id, answer, is_correct from questions LEFT JOIN answers ON questions.id = answers.question_id WHERE questions.id = ${idArray[randomQuestionNumber]};`,
        (err, result) => {
          res.json({
            id: rows[0].question_id,
            question: rows[0].question,
            answers: result
          });
        }
      );
    }
  );
})
});

app.get("/api/questions", (req, res) => {
  //This will render all the questions
conn.query('SELECT * FROM questions;', (err, rows) => {
res.json(rows);
})
});

app.post("/api/questions", (req, res) => {
  //This will add a new question and its answers to the database
});

app.delete("/api/questions/:id", (req, res) => {
  //This will delete a question from the database by entry
});

module.exports = app;
