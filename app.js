const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();

app.set('view engine', 'ejs')
app.use(expressLayouts);

app.get('/', function (req, res) {
  res.render('pages/index')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
