const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();

app.set('view engine', 'ejs')
app.use(expressLayouts);

// set static files (css and images, ect) location
app.use(express.static(__dirname + '/assets'));

app.get('/', function (req, res) {
  res.render('pages/index')
})

app.get('/portfolio', function(req, res) {
  res.render('pages/portfolio');
});

app.get('/blog', function(req, res) {
  res.render('pages/blog');
});

app.get('/prints', function(req, res) {
  res.render('pages/prints');
});

// routes for our about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.get('/contact', function(req, res) {
  res.render('pages/contact');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
