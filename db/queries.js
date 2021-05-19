const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATA,
  port: process.env.DB_PORT
});

// get all the application data from the applications table
const getApplicationData = (user, callback) => {
  const query = `SELECT * FROM applications WHERE username = '${user}';`;

  ; (async () => {
    const client = await pool.connect()
    try {
      const res = await client.query(query);
      callback(null, res.rows);
    } finally {
      client.release();
    }
  })().catch(err => console.log(err.stack));
};

// post the information to the applications table
const postApplication = (newData, callback) => {
  const query = `INSERT INTO applications (username, application, phone_screen, interview, offer)
    VALUES (
      '${newData.username}',
      ${newData.application},
      ${newData.phone_screen},
      ${newData.interview},
      ${newData.offer}
    );`;

  ; (async () => {
    const client = await pool.connect()
    try {
      const res = await client.query(query);
      callback(null, res.rows);
    } finally {
      client.release();
    }
  })().catch(err => console.log(err.stack));
}

module.exports = ({
  getApplicationData,
  postApplication
});