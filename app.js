const express = require('express');
const { nombre, titulo } = require('./constants');
const app = express();
require('dotenv').config();
// Handlebars
const hbs = require('hbs');

const port = process.env.port;

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', function (err) { });

// Servir contenido estatico
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home', {
    nombre,
    titulo
  })
})
app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre,
    titulo
  })
})
app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre,
    titulo
  })
})


app.get('/index', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})
app.get('/generic', (req, res) => {
  res.sendFile(__dirname + '/public/generic.html')
})
app.get('/elements', (req, res) => {
  res.sendFile(__dirname + '/public/elements.html')
})
app.get('*', (req, res) => {
  res.send('404 | Page not found')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})