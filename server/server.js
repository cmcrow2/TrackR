const express = require('express');
const queries = require('../db/queries.js');

// port to use
const PORT = 3003;

// app
const app = express();

// requests


// listen
app.listen(PORT);
console.log(`Server is listening on port ${PORT}...`);