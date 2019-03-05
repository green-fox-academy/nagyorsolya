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

app.get('/greeter', (req, res) => {
    if (req.query.name && req.query.title) {
    res.json({welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`})
  }
    else if (!req.query.name && !req.query.title) {
      res.json({error: "Please provide a name and a title!"})
    }
    else if (!req.query.name) {
      res.json({error: "Please provide a name!"})
    }
    else if (!req.query.title) {
      res.json({error: "Please provide a title!"})
    }
});

app.get('/appenda/:id', (req, res) => {
  if (!req.params.id) {
    res.send({error: "404"})
  }
  else {
res.json({appended: req.params.id + "a"})
  };
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


