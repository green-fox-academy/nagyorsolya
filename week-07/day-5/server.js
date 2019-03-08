"use strict";

const express = require("express");
const app = express();
const PORT = 3000;
//const path = require("path");
app.use(express.json()); //middleware
const path = require("path");
require("dotenv").config();
let mysql = require("mysql");

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

app.use("/assets", express.static("assets"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/posts", (req, res) => {
  conn.query(
    "SELECT posts.title, posts.url, posts.score, users.name FROM posts LEFT JOIN users ON posts.user_id=users.user_id;",
    (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send();
        return;
      }
      res.json(rows);
    }
  );
});

app.post("/posts", (req, res) => {
  let title = req.body.title;
  let url = req.body.url;
  let userid = req.headers.userid;
 
  conn.query(
    `INSERT INTO posts (title, url, user_id) VALUES ('${title}', '${url}', '${userid}');`,
    (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send();
        return;
      }
      res.send(rows);
    }
  );
});

app.put("/posts/:id/upvote", (req, res) => {
  let id = req.params.id;
  conn.query(
    `UPDATE posts SET score = score + 1  WHERE post_id=${id};`,
    (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send();
        return;
      }
      res.send(rows);
    }
  );
});

app.put("/posts/:id/downvote", (req, res) => {
  let id = req.params.id;
  conn.query(
    `UPDATE posts SET score = score - 1  WHERE post_id=${id};`,
    (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send();
        return;
      }
      res.send(rows);
    }
  );
});

app.put("/posts/:id", (req, res) => {
  let title = req.body.title;
  let url = req.body.url;
  let id = req.params.id;
  let userid = req.headers.userid;
  conn.query(
    `SELECT user_id FROM posts WHERE post_id = ${id};`,
    (err, rows) => {
      let user_id = rows[0].user_id;
      if (title && url && userid == user_id) {
        conn.query(
          `UPDATE posts SET title = '${mysql.escape(
            title
          )}' WHERE post_id = ${id};`,
          (err, rows) => {}
        );
        conn.query(
          `UPDATE posts SET url = '${url}' WHERE post_id = ${id};`,
          (err, rows) => {}
        );
      } else if (title && userid == user_id) {
        conn.query(
          `UPDATE posts SET title = '${mysql.escape(
            title
          )}' WHERE post_id = ${id};`,
          (err, rows) => {}
        );
      } else if (url && userid == user_id) {
        conn.query(
          `UPDATE posts SET url = '${url}' WHERE post_id = ${id};`,
          (err, rows) => {}
        );
      }
      res.send();
    }
  );
});

app.delete("/posts/:id", (req, res) => {
  let id = req.params.id;
  let userid = req.headers.userid;
  conn.query(
    `SELECT user_id FROM posts WHERE post_id=${id};`,
    (err, rows) => {
      let user_id = rows[0].user_id;
      if (user_id == userid) {
        conn.query(`DELETE FROM posts WHERE post_id=${id};`, (err, rows) => {});
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
