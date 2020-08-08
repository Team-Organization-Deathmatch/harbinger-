const express = require('express');
const { app } = require('./app')
//const app = express();
//const route = require('./server');
const PORT = 8000;
//const path = require('path');

app.listen(PORT, (req, res) => {
  console.log(`listening on ${PORT}`);
});

// app.use('/', express.static(path.join(__dirname, './server')));
// module.exports = {
//   app
// }