const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();

const path = require('path');

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs')
app.use(expressLayouts);

// set static files (css and images, ect) location
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/portfolio', function(req, res) {
  res.render('portfolio');
});

app.get('/blog', function(req, res) {
  res.render('blog');
});

app.get('/prints', function(req, res) {
  res.render('prints');
});

// routes for our about page
app.get('/about', function(req, res) {
  res.render('about');
});

app.get('/contact', function(req, res) {
  res.render('contact');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
