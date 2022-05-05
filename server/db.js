const {Pool} = require('pg');
// require("dotenv").config();
const pool = new Pool({
  user: 'postgres',
  password: 'mysecretpassword',
  host: 'localhost',
  port: 5432,
  database: 'Omaha'
})

pool.connect()
  .then(() => console.log('database connected, baby'))
  .catch(err => console.log('ERROR connecting database', err));

module.exports = pool;