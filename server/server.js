// testing upstream
const express = require('express');
const path = require('path');
const app = express();
const cors = require(*'cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
// need cors
// body parser 
// 

app.get('/', (req, res) => {
  res.end();
});

app.post('/', (req, res) => {
  res.end();
});
module.exports = {
  app,
};

// dummy change
