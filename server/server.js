// testing upstream
const express = require('express');
const path = require('path');
const app = express();
app.get('/', (req, res) => {
  res.end();
});
app.post('/', (req, res) => {
  res.end();
});
module.exports = {
  app,
};
