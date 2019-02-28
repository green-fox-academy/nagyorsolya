const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use('/views', express.static('views'));

app.get('/', (req, res) => {
  let guest = 'Guest';
  if (req.query.name) {
    guest = req.query.name;
  }
  res.render('home', {
    name: ' ' + guest + '!'
  });
}); 

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});