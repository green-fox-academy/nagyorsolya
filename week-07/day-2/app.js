'use strict';

const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  res.json(
    
 req.query.input?{
    received: Number(req.query.input),
    result: Number(req.query.input*2)
  }
  : {error: 'Please provide an input!'});
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


