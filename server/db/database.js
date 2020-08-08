const { Sequelize } = require('sequelize');

//create a connection to localDB

const db = new Sequelize('harbinger', 'root', '', {host: 'localhost', dialect: 'mysql'});

db.authenticate().then(() => {
    console.log("database connected!!!!");
})
.catch(err => console.error(err));

module.exports = {
    db,
}