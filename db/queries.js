const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATA,
  port: process.env.DB_PORT
});

const getApplicationData = (callback) => {
  const query = 'SELECT * FROM applications';

  ;(async () => {
    const client = await pool.connect()
    try {
      const res = await client.query(query);
      callback(null, res.rows);
    } finally {
      client.release();
    }
  })().catch(err => console.log(err.stack));
};

module.exports = ({
  getApplicationData
});