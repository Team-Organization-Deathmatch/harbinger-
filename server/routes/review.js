const { Router } = require('express');
require('../db/database');
const { saveReview } = require('../db/database');

const reviewRoute = Router();

reviewRoute.post('/retrieve', (req, res) => {
  // this is the route that will retrieve a specific review based on user input
  if (req.user) {
    res.status(201);
    res.send('review POST');
  } else {
    res.status(401);
    res.send('unauthorized');
  }
});

reviewRoute.post('/submit', (req, res) => {
  // this is the route that will allow a user to submit a review
  // if (req.user) {
  const { username, text, weburl, keyword } = req.body;
  saveReview(username, text, weburl, keyword);
  res.status(201);
  res.send('review POST');
  // need to do a db query that takes the req.body
  // and injects necessary data into database
  // store the WebUrl and id
  // store the users ID number
  // store the users email / username?
  // store the review

  // } else {
  //   res.status(401);
  //   res.send('unauthorized');
  // }
});

module.exports = {
  reviewRoute,
};
