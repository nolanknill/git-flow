const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/picture-day', (req, res) => {
    res.send("I hope you didn't forget it's today, I did.");
})

app.listen(3000);