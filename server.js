const express = require('express');
// const bodyParser = require('body-parser');
const app = express()

app.use(express.static('public'));
app.use(express.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: true}));
// app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index');
})

app.post('/', function (req, res) {
  res.render('index');
  })

app.listen(3141, function () {
  console.log('Demo app listening on port 3141!')
})
