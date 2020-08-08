// testing upstream
const { Router } = require('express');
const path = require('path');

const route = Router();

route.get('/', (req, res) => {
  console.log('working GET')
  res.status(200)
  res.send('working GET');
});
route.post('/', (req, res) => {

  res.status(201);
  res.send('working POST');
});
module.exports = {
  route, 
};

// dummy change
