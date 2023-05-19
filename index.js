const express = require('express')
const app = express()
const port = 5000
// const uri = require('./dev.js')

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/api/hello', async(req, res) => {
  res.send('hello');
})