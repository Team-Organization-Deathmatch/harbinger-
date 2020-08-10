const { Router } = require('express');
const path = require('path');
const { getUsers, saveUsers } = require('../db/database');
const homeRoute = Router();

homeRoute.get('/', (req, res) => {
  //this is where we'll populate the home page with data
  //this will pull most recent and upvoted
  // stories from our database
  console.log('working GET');
  res.status(200);
  res.sendFile(path.resolve("client/dist/index.html"));
});

homeRoute.get('/api/users', (req, res) => {
  console.log("GET should hit!!");
  getUsers().then((data) => {
    res.status(200).send(data);
  })
  .catch(err => console.error(err));
});

homeRoute.post('/api/users', (req, res) => {
console.log(req.body);
  saveUsers(req.body).then(() => {
    console.log('users have been saved');
    res.end();
  })
  .catch(err => console.error(err));
});

//
module.exports = {
  homeRoute,
};