const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient
require('./models/User');



var db

MongoClient.connect(uri, (err, client) => {
  if (err) return console.log(err)
  db = client.db('star-wars-quotes') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

app.use(bodyParser.urlencoded({extended: true}))

// all your CRUD handlers here


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

app.get('/', (req, res) => {
  var cursor = db.collection('quotes').find()
  console.log(cursor)
})
