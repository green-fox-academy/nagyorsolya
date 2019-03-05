"use strict";

const express = require("express");
const app = express();
const PORT = 8080;
const path = require("path");
app.use(express.json()); //middleware

app.use("/assets", express.static("assets"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/doubling", (req, res) => {
  res.json(
    req.query.input
      ? {
          received: Number(req.query.input),
          result: Number(req.query.input * 2)
        }
      : { error: "Please provide an input!" }
  );
});

app.get("/greeter", (req, res) => {
  if (req.query.name && req.query.title) {
    res.json({
      welcome_message: `Oh, hi there ${req.query.name}, my dear ${
        req.query.title
      }!`
    });
  } else if (!req.query.name && !req.query.title) {
    res.json({ error: "Please provide a name and a title!" });
  } else if (!req.query.name) {
    res.json({ error: "Please provide a name!" });
  } else if (!req.query.title) {
    res.json({ error: "Please provide a title!" });
  }
});

app.get("/appenda/:id", (req, res) => {
  if (!req.params.id) {
    res.send({ error: "404" });
  } else {
    res.json({ appended: req.params.id + "a" });
  }
});

app.post("/dountil/:action", (req, res) => {
  let inputNum = req.params.action;
  let data = req.body;
  if (inputNum === "sum") {
    res.json({ result: sumUntil(data.until) });
  } else if (inputNum === "factor") {
    res.json({ result: rFact(data.until) });
  }
});

function sumUntil(number) {
  let resultSum = 0;
  for (let i = 0; i <= number; i++) {
    resultSum += i;
  }
  return resultSum;
}

function rFact(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * rFact(num - 1);
  }
}

app.post('/arrays/:action', (req, res) => {
  let what = req.params.action;
  let data = req.body; 
  if (what === "sum") {
    res.json({result: sumNumbers(data.numbers)})
  }
  else if (what === "multiply") {
    res.json({result: multiplyNums(data.numbers)})
  }
  else if (what === "double") {
    res.json({result: doubleNums(data.numbers)})
  }
});

function sumNumbers(numArray) {
  let resultSum = 0;
  for (let i = 0; i < numArray.length; i++) {
    resultSum += numArray[i];
  };
  return resultSum;
};

function multiplyNums (numArray) {
  return numArray.reduce( (a,b) => a * b ); 
}

function doubleNums (numArray) {
  for (let i = 0; i < numArray.length; i++) {
    numArray[i] = numArray[i]*2;
  };
  return numArray;
 };

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
