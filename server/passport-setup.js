const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { getUsers, saveUsers } = require('./db/database');


require('dotenv').config();

// per video @ 7:07
passport.serializeUser(function (user, done) {
  // done(null, user.id);
  console.log('serialize', user.id)
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  // this function is database oriented
  //   User.findById(id, function (err, user) {
  //     done(err, user);
  //   });

  //FIND THE USER IN THE DB BASED ON THE ID IN THE COOKIE

  // originally done(null, user)
  // adding id fixed the login though, need to change back
  done(null, id);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENTID,
      clientSecret: process.env.CLIENTSECRET,
      callbackURL: 'http://localhost:8080/google/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      // this needs to access our DB and either create or pull it?
      // THIS FUNCTION NEEDS TO BE MODDED TO FIND OR CREATE A USER IN OUR DB
      //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //     return done(err, user);
      const email = profile.emails[0].value;
      const image = profile.photos[0].value;
      //console.log(email, image);
      // username bio image
        saveUsers(email, 'bio goes here', image).then(data => {
          //console.log(data);
        })

        //need to pass the user id along
      return done(null, profile);
    }
  )
);
