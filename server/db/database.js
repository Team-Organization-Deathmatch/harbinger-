const { Sequelize } = require('sequelize');

//create a connection to localDB

const db = new Sequelize('harbinger', 'root', '', {host: 'localhost', dialect: 'mysql'});

db.authenticate().then(() => {
    console.log("database connected!!!!");
})
.catch(err => console.error(err));


const user = db.define('user', {
    id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    },
    username: {
        type: Sequelize.STRING(50),
    } ,
    bio: {
        type: Sequelize.STRING(1000),
    } ,
    image: {
        type: Sequelize.STRING(250),
    } ,
});

const message = db.define('message', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    id_sender: {
        type: Sequelize.INTEGER,
        foreignKey: true,
    },
    id_recipient: {
        type: Sequelize.INTEGER,
        foreignKey: true,
    },
    message: {
        type: Sequelize.STRING(2000),
    },
    date: {
        type: Sequelize.DATE
    }
});

const followed = db.define('followed', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    id_follower: {
        type: Sequelize.INTEGER,
        foreignKey: true,
    },
    id_author: {
        type: Sequelize.INTEGER,
        foreignKey: true,
    }
});

const revLike = db.define('devLike', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    id_follower: {
        type: Sequelize.INTEGER,
        foreignKey: true,
    },
    id_author: {
        type: Sequelize.INTEGER,
        foreignKey: true,
    }
});

const review = db.define('review', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    likes: {
        type: Sequelize.INTEGER,
    },
    dislike: {
        type: Sequelize.INTEGER,
    },
    id_user: {
        type: Sequelize.INTEGER,
        foreignKey: true,
    },
    text: {
        type: Sequelize.STRING(2020),
    },
    id_web: {
        type: Sequelize.INTEGER,
        foreignKey: true,
    },
    id_keyword: {
        type: Sequelize.INTEGER,
        foreignKey: true,
    },
    date: {
        type: Sequelize.DATE
    },
});

const webUrl = db.define('webUrl', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        },
    url: {
        type: Sequelize.STRING(500),
        },
});

const keyword = db.define('keyword', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        },
    keyword: {
        type: Sequelize.STRING(100),
        },
});



module.exports = {
    db,
}