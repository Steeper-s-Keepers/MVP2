// var router = require('./routes.js');
const express = require ('express');
const path = require("path");
const pg = require("pg")
const app = express();
const pool = require("./db.js")

//middleware
app.use(express.json());
app.use(express.static('client/dist'));
app.use(express.urlencoded({extended: true}));

const PORT = 3000;

app.post('/stats', (req, res) => {
  console.log('POST IS IT', req.query)
  console.log('POSTIEEE', req.body)
  pool.query(
    `INSERT INTO
      stats
        (winner, loser, winning_hand, losing_hand)
    VALUES
      ($1, $2, $3, $4)`,
      [req.body.winner, req.body.loser, req.body.winning_hand, req.body.losing_hand]
  )
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    res.send(err);
  })
});

app.get('/stats', (req, res) => {

  console.log('get back')

  pool.query(
    `SELECT winner, loser FROM stats`
  )
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err.message)
  })

});


app.listen(PORT, () => {
  console.log(`Server listening on port: 3000`);
})