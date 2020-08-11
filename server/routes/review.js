const { Router } = require('express');
require('../db/database');
const reviewRoute = Router();

reviewRoute.post('/retrieve', (req, res) => {
  //this is the route that will retrieve a specific review based on user input
  if(req.user){
    res.status(201);
    res.send('review POST');

  } else {
    res.status(401);
    res.send('unauthorized');
  }
})

reviewRoute.post('/submit', (req, res) => {
  // this is the route that will allow a user to submit a review
  if(req.user){
    res.status(201);
    res.send('review POST');

  } else {
    res.status(401);
    res.send('unauthorized');
  }
})

module.exports = {
  reviewRoute,
}