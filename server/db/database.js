const { Sequelize } = require('sequelize');

//create a connection to localDB

const db = new Sequelize('harbinger', 'root', '', {host: 'localhost', dialect: 'mysql'}, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("connected to database.");
})

module.exports = {
    db,
}