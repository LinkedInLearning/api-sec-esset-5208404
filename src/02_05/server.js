const express = require("express");
const session = require('express-session');
const fs = require('fs');


const port = 3000;
const app = express();

let reviews = [];

app.use(express.static('public'));
app.use(session({
  secret: 'my-secret',
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: false
  }
}));

app.get('/', function (req, res) {
  if (req.query.newReview) reviews.push(req.query.newReview);
  const formattedReviews = reviews.map((review)=> `<dt>User</dt><dd>${review}</dd>`).join(' ');
  const template = fs.readFileSync('./templates/index.html', 'utf8');
  const view = template.replace('$reviews$', formattedReviews);
  res.send(view);
});

// Um den Angriff zu starten, rufen Sie die URL http://localhost:3000/downloads auf
app.get('/downloads', function(req, res){
// Um sich vor dem Angriff zu schützen müssen sie den Conten-Disposition Header setzen
// res.setHeader('Content-Disposition', 'attachment; filename=index.html');
  const view = fs.readFileSync('./downloads/attacker.html', 'utf8');
  res.send(view);
});

app.listen(port, () => console.log(`The server is listening at http://localhost:${port}`));
