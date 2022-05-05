const {Pool} = require('pg');
// require("dotenv").config();
const pool = new Pool({
  user: 'coryfinkbeiner',
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'omaha'
})

pool.connect()
  .then(() => console.log('database connected, baby'))
  .catch(err => console.log('ERROR connecting database', err));

module.exports = pool;