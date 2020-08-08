require('dotenv').config();
const express = require('express');
const router = require('./server');
const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, (err,) => {
    if (err) {
        console.error(err);
    }
    console.log("listening on PORT ", PORT);
});

app.use(router);

module.exports = {
    app,
}