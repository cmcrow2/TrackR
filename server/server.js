const express = require('express')
const app = express()
const port = 3000

const webpack = require('webpack');
const config = require('../webpack.config.js');
const compiler = webpack(config);

const webpackDevMiddleware = require('webpack-dev-middleware');

app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})