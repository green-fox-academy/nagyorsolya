const express = require("express");
const app = express();

app.get("/groot", (req, res) => {
  // TODO: implement this method
  let received = req.query.message;
  let object = { received: received, translated: "I am Groot!" };
  if (!req.query.message) {
    res.status(400);
    res.json({ error: "I am Groot!" });
  } else {
    res.json(object);
  }
});



module.exports = app;
