const express = require("express");
const session = require('express-session');
const fs = require('fs');
var xFrameOptions = require('x-frame-options')


const port = 3000;
const app = express();

let reviews = [];

app.use(express.static('public'));
app.use(xFrameOptions('Deny'))
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

  // Um sich vor der Clickjacking Attacke zu schützen setzen Sie die Content-Security-Policy-Header mit der Direktive frame-ancestors auf none.
  //res.setHeader('Content-Security-Policy', "frame-ancestors 'none'");
  res.send(view);
});

app.listen(port, () => console.log(`The server is listening at http://localhost:${port}`));
