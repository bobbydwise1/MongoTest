const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.unlencoded({extended: true})

// all your CRUD handlers here

app.listen(3000, function() {
  console.log('Listening on localhost:3000')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
  console.log('Hello!!!')
})
