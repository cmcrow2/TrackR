const express = require('express');
const queries = require('../db/queries.js');
const app = express();
const port = 3000;

const webpack = require('webpack');
const config = require('../webpack.config.js');
const compiler = webpack(config);

const webpackDevMiddleware = require('webpack-dev-middleware');

app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);

app.get('/applications', (req, res) => {
  queries.getApplicationData((error, response) => {
    if (error) {
      console.error(error);
    } else {
      res.send(response);
    }
  })
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});