const fs = require('fs');
const express = require('express')
const app = express()
const port = 5000
// const uri = require('./dev.js')

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
})

connection.connect();

app.get('/api/hello', async(req, res) => {
  connection.query(
    "SELECT * FROM MOVIE",
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
