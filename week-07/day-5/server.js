'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
//const path = require("path");
app.use(express.json()); //middleware
const path = require('path');
require('dotenv').config();
let mysql = require("mysql");

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.use("/assets", express.static("assets"));

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.get('/posts', (req, res) => {
  conn.query('SELECT * FROM posts;', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.json(rows);
})
});

app.post('/posts', (req, res) => {
  let title = req.body.title
  let url = req.body.url
//res.writeHead()
  conn.query(`INSERT INTO posts (title, url) VALUES ('${title}', '${url}');`, (err, rows) => {
  if (err) {
    console.error(err);
    res.status(500).send();
    return;
  }
  res.send(rows);
});
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});