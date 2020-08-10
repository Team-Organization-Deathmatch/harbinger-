const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

// per video @ 7:07
passport.serializeUser(function (user, done) {
  // done(null, user.id);
  done(null, user);
});

passport.deserializeUser(function (id, done) {
  // this function is database oriented
  //   User.findById(id, function (err, user) {
  //     done(err, user);
  //   });

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
      return done(null, profile);
    }
  )
);
