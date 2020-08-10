const { Router } = require('express');
const path = require('path');
require('../db/database');
const homeRoute = Router();

homeRoute.get('/', (req, res) => {
  //this is where we'll populate the home page with data
  //this will pull most recent and upvoted
  // stories from our database
  console.log('working GET');
  res.status(200);
  res.sendFile(path.resolve("client/dist/index.html"));
});

//
module.exports = {
  homeRoute,
};