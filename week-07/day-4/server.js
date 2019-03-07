"use strict";

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

app.get("/booknames", (req, res) => {
  conn.query("SELECT book_name FROM book_mast;", (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.send(rows);
  });
});


app.get("/booklist", (req, res) => {
  conn.query("SELECT book_mast.book_name, book_mast.book_price, author.aut_name, category.cate_descrip, publisher.pub_name FROM book_mast LEFT JOIN author ON book_mast.aut_id = author.aut_id LEFT JOIN category ON book_mast.cate_id = category.cate_id LEFT JOIN publisher ON publisher.pub_id = book_mast.pub_id;", (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.send(rows);
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/assets/views/index.html'));
});

app.get('/listofbooks', (req, res) => {
  res.sendFile(path.join(__dirname, '/assets/views/booklist.html'));
});




app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
