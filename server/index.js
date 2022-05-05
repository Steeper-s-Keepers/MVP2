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
  console.log(req.query)
  pool.query(
    `INSERT INTO
      stats
        (winner, loser, winning_hand, losing_hand)
    VALUES
      ($1, $2, $3, $4)`,
      [req.query.winner, req.query.loser, req.query.winning_hand, req.query.losing_hand]
  )
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    res.send(err);
  })
});


app.listen(PORT, () => {
  console.log(`Server listening on port: 3000`);
})