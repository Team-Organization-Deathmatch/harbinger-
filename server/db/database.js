const { Sequelize } = require('sequelize');

//create a connection to localDB

const db = new Sequelize('harbinger', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

db.authenticate()
  .then(() => {
    console.log('database connected!!!!');
  })
  .catch((err) => console.error(err));

const Users = db.define('Users', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING(50),
  },
  bio: {
    type: Sequelize.STRING(1000),
  },
  image: {
    type: Sequelize.STRING(250),
  },
});
Users.sync();

const Message = db.define('Message', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
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
    type: Sequelize.DATE,
  },
});

const Followed = db.define('Followed', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  id_follower: {
    type: Sequelize.INTEGER,
    foreignKey: true,
  },
  id_author: {
    type: Sequelize.INTEGER,
    foreignKey: true,
  },
});

const RevLike = db.define('RevLike', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  id_follower: {
    type: Sequelize.INTEGER,
    foreignKey: true,
  },
  id_author: {
    type: Sequelize.INTEGER,
    foreignKey: true,
  },
});

const Review = db.define('Review', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
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
    type: Sequelize.DATE,
  },
});

const saveReview = (id_user, text, id_web, id_keyword, date) => {
  return Review.create({
    id: id,
    likes: 0,
    dislikes: 0,
    id_user: userID,
    text: text,
    id_web: id_web,
    id_keyword: id_keyword,
    date: date,
  });
};

const WebUrls = db.define('WebUrls', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  url: {
    type: Sequelize.STRING(500),
  },
});
WebUrls.sync();

const Keyword = db.define('Keyword', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  keyword: {
    type: Sequelize.STRING(100),
  },
});
Keyword.sync();

const saveOrFindKeyWord = (keyword) => {
  return Keyword.findOne({ where: { keyword: keyword } })
    .then((data) => {
      if (data === null) {
        console.log('keyword created!!!');
        return Keyword.create({ keyword: keyword });
      } else {
        console.log(data, 'keyword already exists!');
      }
    })
    .catch((err) => console.log(err));
};

const saveOrFindWebUrl = (url) => {
  return WebUrls.findOne({ where: { url: url } })
    .then((data) => {
      if (data === null) {
        console.log('webURL created!');
        return WebUrls.create({ url: url });
      } else {
        console.log(data, 'webUrl already exists!');
      }
    })
    .catch((err) => console.log(err));
};

const saveUsers = (username, bio, image) => {
  return Users.findOne({ where: { username: username } }).then((data) => {
    if (data === null) {
      return Users.create({ username: username, bio: bio, image: image });
    } else {
      console.log(data);
      console.log('entry already exists');
    }
  });
};

const getUsers = () => {
  return Users.findAll({});
};

module.exports = {
  db,
  saveUsers,
  getUsers,
  saveOrFindKeyWord,
  saveOrFindWebUrl,
};
