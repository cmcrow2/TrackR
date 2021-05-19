const express = require('express');
const queries = require('../db/queries.js');
const app = express();
const port = 3000;

const webpack = require('webpack');
const config = require('../webpack.config.js');
const compiler = webpack(config);

const webpackDevMiddleware = require('webpack-dev-middleware');

app.use(express.json());
app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);

app.get(`/applications/:user`, (req, res) => {
  const user = req.params.user;
  queries.getApplicationData(user, (error, data) => {
    if (error) {
      console.error(error);
    } else {
      res.send(data);
    }
  })
});

app.post('/applications', (req, res) => {
  queries.postApplication(req.body, (err, newApplication) => {
    if (err) {
      console.log(err);
    } else {
      res.send(newApplication);
    }
  });
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});