const { Router } = require('express');
require('./db/database');
const reviewRoute = Router();

reviewRoute.post('/retrieve', (req, res) => {
  //this is the route that will retrieve a specific review based on user input

  res.status(201);
  res.send('criteria submitted')
})

reviewRoute.post('/submit', (req, res) => {
  // this is the route that will allow a user to submit a review
  res.status(201);
  res.send('review submitted');
})

module.exports = {
  reviewRoute,
}