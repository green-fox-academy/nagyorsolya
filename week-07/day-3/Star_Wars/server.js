"use strict";

const express = require('express');
const app = express();
const PORT = 3000;
//const path = require("path");
app.use(express.json()); //middleware
const path = require('path');
//require('dotenv').config();
/*let mysql = require("mysql");

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});*/

app.use("/assets", express.static("assets"));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/assets/views/star-wars-api.html'));
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
