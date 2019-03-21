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
  conn.query("SELECT id FROM questions;", (err, ids) => {
    let idArray = [];
    Array.from(ids).forEach(element => {
      idArray.push(element.id);
    });

    let randomQuestionNumber = Math.floor(Math.random() * idArray.length) + 0;
    conn.query(
      `SELECT * from questions LEFT JOIN answers ON questions.id = answers.question_id WHERE questions.id = ${
        idArray[randomQuestionNumber]
      };`,
      (err, rows) => {
        conn.query(
          `SELECT answers.id, question_id, answer, is_correct from questions LEFT JOIN answers ON questions.id = answers.question_id WHERE questions.id = ${
            idArray[randomQuestionNumber]
          };`,
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
  });
});

app.get("/api/questions", (req, res) => {
  //This will render all the questions
  conn.query("SELECT * FROM questions;", (err, rows) => {
    res.json(rows);
  });
});

app.post("/api/questions", (req, res) => {
  let newQuestion = req.body.question;
  let newAnswer1 = req.body.answer1;
  let newAnswer2 = req.body.answer2;
  let newAnswer3 = req.body.answer3;
  let newAnswer4 = req.body.answer4;
  let iscorrect1 = req.body.iscorrect1;
  let iscorrect2 = req.body.iscorrect2;
  let iscorrect3 = req.body.iscorrect3;
  let iscorrect4 = req.body.iscorrect4;
  let id = 0;

  //This will add a new question and its answers to the database
  conn.query(
    `INSERT INTO questions (question) VALUES ('${newQuestion}');`,
    (err, rows) => {}
  );
  conn.query(
    `SELECT id FROM questions WHERE question='${newQuestion}';`,
    (err, newid) => {
      id = newid;
      console.log(id);
    }
  );
  conn.query(
    `INSERT INTO answers (question_id, answer, is_correct) VALUES (${id}, '${newAnswer1}', ${iscorrect1}), (${id}, '${newAnswer2}',
     ${iscorrect2}), (${id}, '${newAnswer3}', ${iscorrect3}), (${id}, '${newAnswer4}', ${iscorrect4});`,
    (err, rowss) => {
      console.log(rowss);
    }
  );
  conn.query(
    `SELECT answer, is_correct FROM answers WHERE question_id=${id};`,
    (err, endresult) => {
      console.log(newQuestion, endresult);
      res.json({ question: newQuestion, answers: endresult });
    }
  );
});

app.delete("/api/questions/:id", (req, res) => {
  //This will delete a question from the database by entry
});

module.exports = app;
