const express = require('express')
const app = express()

app.get('/main', function (req, res) {
  res.send('this is my login page ')
})

app.listen(3000)
