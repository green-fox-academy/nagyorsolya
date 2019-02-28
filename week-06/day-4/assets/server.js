'use strict';

const express = require ('express');
const app = express(); //<= saves method in variable
const PORT = 3000; //capitals is just a convention
const path = require ('path');

app.listen(PORT, () => {
  console.log('Server is running at ${PORT}');
  }); 
  

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});