const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use('/views', express.static('views'));

const todos = [
  'get up',
  'survive',
  'go back to bed',
];

app.get('/', (req, res) => {
  res.render('home', {todos});
  });
  
// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});